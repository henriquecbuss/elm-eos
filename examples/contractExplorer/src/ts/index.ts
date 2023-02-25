// Needed for eosjs
window.global = globalThis;

import { initAccessContext, Wallet, WalletState } from "eos-transit";
import scatter from "eos-transit-scatter-provider";
import simpleos from "eos-transit-simpleos-provider";
import { ElmApp } from "generated/Main";
import { defineCustomElements } from "../../generated/customElements";
import env from "./env";

const handleNewWalletState = (
  newWalletState: WalletState | undefined,
  previousWalletState: WalletState | null,
  wallet: Wallet,
  app: ElmApp
): WalletState | null => {
  console.log(newWalletState);
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

        void (async () => {
          wallet = accessContext.initWallet(walletProviderId);

          wallet.subscribe((walletState) => {
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

          try {
            // we handle new states in wallet.subscribe above
            await wallet.connect();
            await wallet.login();
          } catch (err) {}
        })();

        break;
      }

      case "disconnectWallet": {
        void (async () => {
          if (wallet !== null) {
            await wallet.disconnect();
            await wallet.logout();

            previousWalletState = null;
            wallet = null;
          }
        })();

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
