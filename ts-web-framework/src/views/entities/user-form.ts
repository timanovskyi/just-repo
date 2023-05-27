import { User } from "../../entities";
import { UserProps } from "../../models";
import { GeneralView } from "./general-view";

export class UserForm extends GeneralView<User, UserProps> {
  private _onChangeName = () => {
    const input = this.parent.querySelector("input")!;
    this.model.updateValueAndTrigger({ name: input.value }, "change");
  };

  private _onHeaderHover() {
    console.log("_onHeaderHover");
  }

  private _onSetAgeClick = () => {
    this.model.setRandomAge();
  };

  private _onSaveModel = () => {
    this.model.saveData({});
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button.set-age": this._onSetAgeClick,
      "click:button.change-name": this._onChangeName,
      "click:button.save-model": this._onSaveModel,
      "mouseenter:h1": this._onHeaderHover,
    };
  }

  template(): string {
    return `
        <div>
            <input placeholder="${this.model.getPartOfModel('name')}">
            <button class="change-name">Change name</button>
            <button class="set-age">Set random age</button>
            <button class="save-model">Save user</button>
        </div>
        `;
  }
}
