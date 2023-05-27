import axios, { AxiosResponse } from "axios";
import { ModelAPISync, ReuiredApiSyncProperties } from "../models/";

export class ApiSync<T extends ReuiredApiSyncProperties>
  implements ModelAPISync<T>
{
  constructor(private _rootUrl: string) {}

  fetchDataById(id: string | number): Promise<T> {
    return axios.get(`${this._rootUrl}/${id}`);
  }

  fetchAllData(): Promise<AxiosResponse> {
    return axios.get(this._rootUrl);
  }

  saveData(data: Partial<T>): Promise<unknown> {
    const { id } = data;

    return id ? this._updateExisting(id, data) : this._createNew(data);
  }

  private _createNew(data: Partial<T>): Promise<unknown> {
    return axios.post(`${this._rootUrl}/`, data);
  }

  private _updateExisting(
    id: number | string,
    data: Partial<T>
  ): Promise<unknown> {
    return axios.put(`${this._rootUrl}/${id}`, data);
  }
}
