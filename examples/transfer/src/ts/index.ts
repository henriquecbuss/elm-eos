import { defineCustomElements } from "../../generated/customElements";

const run = () => {
  defineCustomElements();

  const defaultPrivateKey = "";

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const signatureProvider = new eosjs_jssig.JsSignatureProvider([
    defaultPrivateKey,
  ]);

  const defaultEndpoint = "https://staging.cambiatus.io";

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const rpc = new eosjs_jsonrpc.JsonRpc(defaultEndpoint);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const api = new eosjs_api.Api({ rpc, signatureProvider });

  const app = window.Elm.Main.init({
    flags: {},
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

      case "transfer": {
        console.log("transferring", data.actions);
        void (async () => {
          try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            const result = await api.transact(
              { actions: [data.actions] },
              {
                blocksBehind: 3,
                expireSeconds: 30,
              }
            );

            console.dir(result);
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
