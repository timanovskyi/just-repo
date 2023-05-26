import { OptionalUserProps, UserProps, ModelAttributes } from "../models";

export class Attributes<T extends object> implements ModelAttributes<T> {
  constructor(private _data: Partial<T>) {}

  get<K extends keyof T>(propName: K): T[K] | undefined {
    return this._data[propName];
  }

  set(update: Partial<T>) {
    Object.assign(this._data, update);
  }

  getAll(): T | Partial<T> {
    return this._data;
  }
}
