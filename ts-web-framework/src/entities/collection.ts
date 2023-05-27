import { AxiosResponse } from "axios";
import {
  ModelAPISync,
  ModelAttributes,
  ReuiredApiSyncProperties,
} from "../models";
import { ApiSync } from "./api-sync";
import { Eventing } from "./eventing";
import { User } from "./user";

export class Collection<T, K extends ReuiredApiSyncProperties> {
  models: T[] = [];
  private _events: Eventing = new Eventing();
  private _apiSync: ModelAPISync<K>;
  triggerEvent = this._events.triggerEvent;
  registerEvent = this._events.registerEvent;

  constructor(private _url: string, private _deserialize: (json: K) => T) {
    this._apiSync = new ApiSync<K>(_url);
  }

  fetchAllData(): Promise<unknown> {
    return this._apiSync
      .fetchAllData()
      .then((response: AxiosResponse) =>
        this._updateValueAndTrigger(response.data, "fetchAllData")
      )
      .catch((e) => console.log("Sorry, lets try one more time"));
  }

  private _updateValueAndTrigger(data: K[], eventName: string) {
    Array.from(data ?? []).forEach((v) =>
      this.models.push(this._deserialize(v))
    );
    this.triggerEvent(eventName);
  }
}
