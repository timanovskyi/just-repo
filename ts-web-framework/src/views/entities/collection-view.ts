import { Collection, User } from "../../entities";
import { ReuiredApiSyncProperties, UserProps } from "../../models";

export abstract class CollectionView<T, K extends ReuiredApiSyncProperties> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render() {
    this.parent.innerHTML = "";
    const templEl = document.createElement("template");

    for (let model of this.collection.models) {
      const itemP = document.createElement("div");
      this.renderItem(model, itemP);
      templEl.content.append(itemP);
    }

    this.parent.append(templEl.content);
  }
}
