import { ModelAttributes, ModelAPISync, ModelEvents } from "../models/";
export class GeneralModel<T> {
  constructor(
    private _attributes: ModelAttributes<T>,
    private _events: ModelEvents,
    private _apiSync: ModelAPISync<T>
  ) {}

  get triggerEvent() {
    return this._events.triggerEvent;
  }

  get registerEvent() {
    return this._events.registerEvent;
  }

  saveData(data: Partial<T>): Promise<unknown> {
    return this._apiSync
      .saveData(data)
      .then(() => this._updateValueAndTrigger(data, "save"))
      .catch(() => console.log("Sorry, lets try one more time"));
  }

  async fetchData(key: keyof T): Promise<unknown> {
    try {
      const el = this._attributes.get(key) as string | number;
      const data = await this._apiSync.fetchData(el);
      this._updateValueAndTrigger(data, "fetch");
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
