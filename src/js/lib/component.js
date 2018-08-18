import Store from "../store/store.js";

export default class Component {
  constructor(props = {}) {
    this.render = this.render || function() {};

    if (props.store instanceof Store) {
      props.store.events.subscribe("stateChange", () => this.render());
    }

    if (props.hasOwnProperty("element")) {
      this.element = props.element;
    }

    this.setComponentState = this.setComponentState.bind(this);
  }

  /* Add simple promised based setComponentState */
  setComponentState(obj) {
    return new Promise(resolve => {
      this.componentState = { ...this.componentState, ...obj };
      resolve();
    }).then(() => {
      this.render();
    });
  }
}
