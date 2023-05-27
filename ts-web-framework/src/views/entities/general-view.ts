import { GeneralModel, User } from "../../entities";

export abstract class GeneralView<T extends GeneralModel<K>, K> {
  abstract template(): string;

  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this._bindModel();
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  render() {
    this.parent.innerHTML = "";

    const templateEl = document.createElement("template");
    templateEl.innerHTML = this.template();

    this._bindEvents(templateEl.content);
    this._mapRegions(templateEl.content);

    this.onRender();

    this.parent.append(templateEl.content);
  }

  private _bindModel() {
    this.model.registerEvent("change", () => this.render());
  }

  private _mapRegions(fragment: DocumentFragment) {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  private _bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap();
    for (let eventsMapKey in eventsMap) {
      const [eventName, selector] = eventsMapKey.split(":");
      fragment.querySelectorAll(selector).forEach((e) => {
        e.addEventListener(eventName, eventsMap[eventsMapKey]);
      });
    }
  }

  onRender() {}
}
