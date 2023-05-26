import { Callback, Events } from "../";

export interface ModelAttributes<T> {
  get<K extends keyof T>(propName: K): T[K] | undefined;
  set(update: Partial<T>): void;
  getAll(): T | Partial<T>;
}
export interface ModelAPISync<T> {
    fetchData(id: string | number): Promise<T>
    saveData(data: Partial<T>): Promise<unknown>
}

export interface ModelEvents {
  registerEvent(eventName: string, callback: Callback): void;
  triggerEvent(eventName: string): void;
}

export interface ReuiredApiSyncProperties {
    id: string | number;
}
