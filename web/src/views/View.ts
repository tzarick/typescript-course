import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  // ^ passing in 2 types to View constructor. T will have all the same types as Model<K> which is something like User, where K is something like UserProps. Pass in model and K

  regions: { [key: string]: Element } = {};

  // base class of all HTML elements
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {}; // we can still override this method if we implement it in the child class but we don't have to now
  }

  bindModel(): void {
    this.model.on('change', (): void => {
      this.render();
    });
  }

  private bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {} // prime location to do view nesting

  render(): void {
    this.parent.innerHTML = ''; // empty the parent element each time we render

    // append template to parent
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template(); // use string template to create html element 'template'

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
