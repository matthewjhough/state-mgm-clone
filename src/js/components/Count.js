import Component from "../lib/component.js";
import store from "../store/index.js";

export default class Count extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector(".js-count")
    });
  }

  render() {
    const suffix = store.state.items.length !== 1 ? "s" : "";
    this.element.innerHTML = `
        <small>You've done</small>
        ${store.state.items.length}
        <small>Task${suffix} today</small>
      `;
  }
}
