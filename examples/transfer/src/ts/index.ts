import { defineCustomElements } from "../../generated/customElements";

const run = () => {
  defineCustomElements();
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
    }
  });
};

run();

export {};
