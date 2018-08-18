import Component from "../lib/component.js";
import store from "../store/index.js";

export default class Count extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector(".js-count")
    });

    this.store = store;
  }

  render() {
    const { items } = this.store.state;
    const suffix = items.length !== 1 ? "s" : "";
    this.element.innerHTML = `
        <small>You've done</small>
        ${items.length}
        <small>Task${suffix} today</small>
      `;
  }
}
