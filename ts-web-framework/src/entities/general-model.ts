import { ModelAttributes, ModelAPISync, ModelEvents } from "../models/";

export class GeneralModel<T> {
  triggerEvent = this._events.triggerEvent;
  registerEvent = this._events.registerEvent;
  constructor(
    private _attributes: ModelAttributes<T>,
    private _events: ModelEvents,
    private _apiSync: ModelAPISync<T>
  ) {}

  getPartOfModel(v: keyof T) {
    return this._attributes.get(v);
  }

  setPartOfModel(v: Partial<T>) {
    return this._attributes.set(v);
  }

  saveData(data: Partial<T>): Promise<unknown> {
    return this._apiSync
      .saveData(data)
      .then(() => this.updateValueAndTrigger(data, "change"))
      .catch(() => console.log("Sorry, lets try one more time"));
  }

  async fetchDataById(id: keyof T): Promise<unknown> {
    try {
      const el = this._attributes.get(id) as string | number;
      const data = await this._apiSync.fetchDataById(el);
      this.updateValueAndTrigger(data, "change");
      return data;
    } catch (_) {
      console.log("Sorry, lets try one more time");
    }
  }

  updateValueAndTrigger(data: Partial<T>, eventName: string) {
    this.setPartOfModel(data);
    this.triggerEvent(eventName);
  }
}
