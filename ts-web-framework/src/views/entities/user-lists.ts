import { UserShow } from ".";
import { User } from "../../entities";
import { UserProps } from "../../models";
import { CollectionView } from "./collection-view";

export class UserLists extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}