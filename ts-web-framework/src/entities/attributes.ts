import { OptionalUserProps, UserProps } from "../models";

export class Attributes<T extends object> {
  constructor(private _data: Partial<T>) {}

  get<K extends keyof T>(propName: K): T[K] | undefined {
    return this._data[propName];
  }

  set(update: Partial<T>) {
    Object.assign(this._data, update);
  }
}
