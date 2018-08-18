import Component from "../lib/component.js";
import store from "../store/index.js";

export default class List extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector(".js-items")
    });

    this.store = store;
    this.clearItem = this.clearItem.bind(this);
  }

  clearItem(type, index) {
    this.store.dispatch(type, index);
  }

  render() {
    if (store.state.items.length === 0) {
      this.element.innerHTML = `<p class="no-items">No tasks completed yet.</p>`;
      return;
    }

    this.element.innerHTML = `
    <ul class="app__items">
        ${store.state.items
          .map(item => {
            return `
                <li>${item}<button aria-label="Delete this item">×</button></li>
            `;
          })
          .join("")}
    </ul>
    `;

    this.element
      .querySelectorAll("button")
      .forEach((button, index) =>
        button.addEventListener("click", () =>
          this.clearItem("clearItem", { index })
        )
      );
  }
}
