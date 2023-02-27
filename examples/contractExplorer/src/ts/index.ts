// Needed for eosjs
window.global = globalThis;

import {
  initAccessContext,
  StateUnsubscribeFn,
  Wallet,
  WalletState,
} from "eos-transit";
import scatter from "eos-transit-scatter-provider";
import simpleos from "eos-transit-simpleos-provider";
import { ElmApp } from "generated/Main";
import { defineCustomElements } from "../../generated/customElements";
import env from "./env";
import { eos } from "./eos";

const handleNewWalletState = (
  newWalletState: WalletState | undefined,
  previousWalletState: WalletState | null,
  wallet: Wallet,
  app: ElmApp
): WalletState | null => {
  if (newWalletState === undefined) {
    return null;
  }

  if (newWalletState.connecting && !previousWalletState?.connecting) {
    app.ports.interopToElm.send({
      tag: "startedConnectingToWallet",
      data: {
        providerId: wallet.provider.id,
      },
    });
  }

  if (
    newWalletState.accountFetchError &&
    !previousWalletState?.accountFetchError
  ) {
    app.ports.interopToElm.send({
      tag: "errorConnectingToWallet",
      data: {
        providerId: wallet.provider.id,
      },
    });
  }

  if (
    newWalletState.accountInfo &&
    previousWalletState?.accountInfo === undefined
  ) {
    let accountName = newWalletState.accountInfo.name;
    if ("account_name" in newWalletState.accountInfo) {
      accountName = newWalletState.accountInfo.account_name as string;
    }

    app.ports.interopToElm.send({
      tag: "connectedToWallet",
      data: {
        providerId: wallet.provider.id,
        accountName,
      },
    });
  }

  if (!newWalletState.authenticated && previousWalletState?.authenticated) {
    app.ports.interopToElm.send({
      tag: "disconnectedFromWallet",
      data: {
        providerId: wallet.provider.id,
      },
    });
  }

  return newWalletState;
};

const run = () => {
  defineCustomElements();

  const accessContext = initAccessContext({
    appName: env.appName,
    network: {
      host: env.chain.host,
      protocol: env.chain.protocol,
      chainId: env.chain.id,
    },
    walletProviders: [simpleos(), scatter()],
  });

  const walletProviderIds = accessContext
    .getWalletProviders()
    .map((provider) => provider.id);

  const app = window.Elm.Main.init({
    flags: {
      walletProviderIds,
    },
  });

  let wallet: Wallet | null = null;
  let walletUnsubscribe: StateUnsubscribeFn | null = null;
  let previousWalletState: WalletState | null = null;

  app.ports.interopFromElm.subscribe(({ tag, data }) => {
    switch (tag) {
      case "alert": {
        console.warn(data.message);

        app.ports.interopToElm.send({ tag: "alerted" });

        break;
      }

      case "scrollTo": {
        document.querySelector(data.querySelector)?.scrollIntoView({
          behavior: "smooth",
        });
        break;
      }

      case "connectWallet": {
        const { walletProviderId } = data;

        wallet = accessContext.initWallet(walletProviderId);

        walletUnsubscribe = wallet.subscribe((walletState) => {
          if (wallet === null) {
            return;
          }

          previousWalletState = handleNewWalletState(
            walletState,
            previousWalletState,
            wallet,
            app
          );
        });

        eos.wallet.connect(wallet).then((success) => {
          if (!success) {
            app.ports.interopToElm.send({
              tag: "errorConnectingToWallet",
              data: {
                providerId: walletProviderId,
              },
            });
          }
        });

        break;
      }

      case "disconnectWallet": {
        if (wallet === null) {
          return;
        }

        eos.wallet.disconnect(wallet, walletUnsubscribe).then(() => {
          previousWalletState = null;
          wallet = null;
          walletUnsubscribe = null;
        });

        break;
      }

      case "performEosTransaction": {
        void (async () => {
          try {
            // const result = await eos.transact(
            //   { actions: [data.actions] },
            //   {
            //     blocksBehind: 3,
            //     expireSeconds: 30,
            //   }
            // );
            const result = "";

            console.log(result);
          } catch (err) {
            console.error(err);
          }
        })();
      }
    }
  });
};

run();

export {};
