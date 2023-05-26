import { UserProps } from "../models";
import { Attributes } from "./attributes";
import { Eventing } from "./eventing";
import { Sync } from "./sync";

const URL = "http://localhost:3000/users";
export class User extends Attributes<UserProps> {
  constructor(
    _data: Partial<UserProps>,
    public events = new Eventing(),
    private _sync = new Sync<UserProps>(URL)
  ) {
    super(_data);
  }

  saveUser(data: Partial<UserProps>) {
    this._sync
      .saveData(data)
      .then(() => {
        this.set(data);
      })
      .catch(() => {
        console.log("Sorry, lets try one more time");
      });
  }

  async fetchUser() {
    try {
      const data = await this._sync.fetchData(this.get("id")!);
      this.set(data);
    } catch (_) {
      console.log("Sorry, lets try one more time");
    }
  }
}
