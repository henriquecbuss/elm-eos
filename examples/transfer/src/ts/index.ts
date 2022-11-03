import { defineCustomElements } from "../../generated/customElements";
import { eos } from "./eos";

const run = () => {
  defineCustomElements();

  const app = window.Elm.Main.init({
    flags: {
      privateKey: eos.getPrivateKey(),
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
        eos.login(privateKey);

        app.ports.interopToElm.send({ tag: "loggedIn", privateKey });

        break;
      }

      case "logout": {
        eos.logout();

        app.ports.interopToElm.send({ tag: "loggedOut" });

        break;
      }

      case "transfer": {
        console.log("transferring", data.actions);
        void (async () => {
          try {
            const result = await eos.transact(
              { actions: [data.actions] },
              {
                blocksBehind: 3,
                expireSeconds: 30,
              }
            );

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
