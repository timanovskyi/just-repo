import { UserProps } from "../models";
import { Attributes } from "./attributes";
import { Eventing } from "./eventing";
import { ApiSync } from "./api-sync";
import { GeneralModel } from "./general-model";
import { Collection } from "./collection";

const URL = "http://localhost:3000/users";
export class User extends GeneralModel<UserProps> {
  static createUser(data: Partial<UserProps>): User {
    return new User(new Attributes(data), new Eventing(), new ApiSync(URL));
  }

  static createUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(URL, User.createUser);
  }

  // TODO
  // static createUserWithLocalStorage(): User

  setRandomAge(): void {
    this.updateValueAndTrigger(
      { age: Math.round(Math.random() * 100) },
      "change"
    );
  }
}
