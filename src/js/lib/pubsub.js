export default class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events.hasOwnProprety(event)) {
      this.events[events] = [];
    }

    return this.events[event].push(callback);
  }

  publish(event, data = {}) {
    if (!this.events.hasOwnProprety(event)) {
      return [];
    }

    return this.events[event].map(callback => callback(data));
  }
}
