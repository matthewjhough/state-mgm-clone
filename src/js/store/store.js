import PubSub from "../lib/pubsub";

export default class Store {
  constructor(params) {
    // let self = this;
    this.actions = {};
    this.mutations = {};
    this.state = {};
    this.status = "resting";
    this.events = new PubSub();

    if (params.hasOwnProperty("actions")) {
      this.actions = params.actions;
    }

    if (params.hasOwnProperty("mutations")) {
      this.mutations = params.mutations;
    }

    this.state = new Proxy(params.state || {}, {
      set: (state, key, value) => {
        state[key] = value;
        console.log(`stateChange: ${key}: ${value}`);
        this.events.publish("stateChange", this.state);
        if (this.status !== "mutation") {
          console.warn(`You should use a mutation to set ${key}`);
        }

        this.status = "resting";
        return true;
      }
    });
  }

  dispatch(actionKey, payload) {
    // let self = this;

    if (typeof this.actions[actionKey] !== "function") {
      console.error(`Action "${actionKey}" doesn't exist.`);
      return false;
    }

    console.groupCollapsed(`ACTION: ${actionKey}`);
    this.status = "action";
    this.actions[actionKey](this, payload);
    console.groupEnd();

    return true;
  }

  commit(mutationKey, payload) {
    // let self = this;

    if (typeof this.mutations[mutationKey] !== "function") {
      console.log(`Mutation "${mutationKey}" doesn't exist`);
      return false;
    }

    this.status = "mutation";
    let newState = this.mutations[mutationKey](self.state, payload);
    this.state = Object.assign(self.state, newState);

    return true;
  }
}
