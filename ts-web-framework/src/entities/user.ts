import axios from "axios";
import { Callback, Events, UserProps, OptionalUserProps } from "../models";

export class User {
  private _events: Events = {};

  constructor(private _data: OptionalUserProps) {}

  get(propName: keyof UserProps): number | string | undefined {
    return this._data[propName];
  }

  set(update: OptionalUserProps) {
    Object.assign(this._data, update);
  }

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

  fetchData() {
    axios.get(`http://localhost:3000/users/${this.get("id")}`).then((r) => {
      this.set(r.data);
    });
  }

  saveData(data: OptionalUserProps) {
    const userId = this.get("id");

    const response = userId
      ? this._updateExistingUser(+userId, data)
      : this._sendNewUser(data);
    response.then(() => {
      this.set(data);
    }).catch(() => {
      console.log('Sorry, let\s try one more time')
    });
  }

  private _sendNewUser(data: OptionalUserProps): Promise<unknown> {
    return axios.post(`http://localhost:3000/users/`, data);
  }

  private _updateExistingUser(
    id: number,
    data: OptionalUserProps
  ): Promise<unknown> {
    return axios.put(`http://localhost:3000/users/${id}`, data);
  }
}
