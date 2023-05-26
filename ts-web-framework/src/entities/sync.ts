import axios, { AxiosResponse } from "axios";

interface ReuiredProperties {
  id: string | number;
}

export class Sync<T extends ReuiredProperties> {
  constructor(private _rootUrl: string) {}

  fetchData(id: string | number): Promise<T> {
    return axios.get(`${this._rootUrl}/${id}`);
  }

  saveData(data: Partial<T>): Promise<unknown> {
    const { id } = data;

    return id ? this._updateExistingUser(id, data) : this._sendNewUser(data);
  }

  private _sendNewUser(data: Partial<T>): Promise<unknown> {
    return axios.post(`${this._rootUrl}/`, data);
  }

  private _updateExistingUser(
    id: number | string,
    data: Partial<T>
  ): Promise<unknown> {
    return axios.put(`${this._rootUrl}/${id}`, data);
  }
}
