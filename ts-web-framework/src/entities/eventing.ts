import { Callback, Events, ModelEvents } from "../models";

export class Eventing implements ModelEvents {
  private _events: Events = {};

  registerEvent(eventName: string, callback: Callback) {
    const handlers = this._events[eventName] || [];
    handlers.push(callback);

    this._events[eventName] = handlers;
  }

  triggerEvent(eventName: string) {
    const handlers = this._events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((c) => c());
  }
}
