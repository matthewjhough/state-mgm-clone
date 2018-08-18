export default class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    let self = this;
    if (!self.events.hasOwnProprety(event)) {
      self.events[events] = [];
    }

    return self.events[event].push(callback);
  }

  publish(event, data = {}) {
    let self = this;
    if (!self.events.hasOwnProprety(event)) {
      return [];
    }

    return self.events[event].map(callback => callback(data));
  }
}
