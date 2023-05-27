import { ModelAttributes, ModelAPISync, ModelEvents } from "../models/";

export class GeneralModel<T> {
  triggerEvent = this._events.triggerEvent;
  registerEvent = this._events.registerEvent;
  constructor(
    private _attributes: ModelAttributes<T>,
    private _events: ModelEvents,
    private _apiSync: ModelAPISync<T>
  ) {}

  saveData(data: Partial<T>): Promise<unknown> {
    return this._apiSync
      .saveData(data)
      .then(() => this._updateValueAndTrigger(data, "save"))
      .catch(() => console.log("Sorry, lets try one more time"));
  }

  async fetchDataById(id: keyof T): Promise<unknown> {
    try {
      const el = this._attributes.get(id) as string | number;
      const data = await this._apiSync.fetchDataById(el);
      this._updateValueAndTrigger(data, "fetchDataById");
      return data;
    } catch (_) {
      console.log("Sorry, lets try one more time");
    }
  }

  private _updateValueAndTrigger(data: Partial<T>, eventName: string) {
    this._attributes.set(data);
    this.triggerEvent(eventName);
  }
}
