import autoAnimate from "@formkit/auto-animate";

class AutoAnimate extends HTMLElement {
  connectedCallback() {
    autoAnimate(this);
  }
}

export default { name: "auto-animate", classConstructor: AutoAnimate };
