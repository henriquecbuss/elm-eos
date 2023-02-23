// Needed for eosjs
window.global = globalThis;

import { defineCustomElements } from "../../generated/customElements";
import { initAccessContext } from "eos-transit";
import scatter from "eos-transit-scatter-provider";
import simpleos from "eos-transit-simpleos-provider";

const accessContext = initAccessContext({
  // TODO - Change details here
  appName: "elm-eos example",
  network: {
    host: "api.pennstation.eosnewyork.io",
    port: 7001,
    protocol: "http",
    chainId: "",
  },
  walletProviders: [simpleos(), scatter()],
});

console.log("walletProviders", accessContext.getWalletProviders());

const run = () => {
  defineCustomElements();

  const app = window.Elm.Main.init({
    flags: {
      // privateKey: eos.getPrivateKey(),
      privateKey: "",
    },
  });

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

      case "login": {
        const { privateKey } = data;
        // eos.login(privateKey);

        app.ports.interopToElm.send({ tag: "loggedIn", privateKey });

        break;
      }

      case "logout": {
        // eos.logout();

        app.ports.interopToElm.send({ tag: "loggedOut" });

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
