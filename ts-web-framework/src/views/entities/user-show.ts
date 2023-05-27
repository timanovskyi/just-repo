import { User } from "../../entities";
import { UserProps } from "../../models";
import { GeneralView } from "./general-view";

export class UserShow extends GeneralView<User, UserProps> {
  template(): string {
    return `
        <div>
            <h1>User Details</h1>
            <div>User name: ${this.model.getPartOfModel("name")}</div>
            <div>User age: ${this.model.getPartOfModel("age")}</div>
        </div>
        `;
  }
}
