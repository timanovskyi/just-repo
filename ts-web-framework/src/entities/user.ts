import {UserProps} from '../models'

export class User {
    constructor(private _data: UserProps) {
    }

    get(propName: string): number | string {
        return this._data[propName]
    }
}
