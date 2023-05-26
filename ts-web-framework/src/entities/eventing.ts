import { Callback, Events, UserProps, OptionalUserProps } from "../models";

export class Eventing {
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