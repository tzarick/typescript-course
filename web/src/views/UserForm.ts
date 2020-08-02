import { User } from '../models/User';

export class UserForm {
  // base class of all HTML elements
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onHeaderHover(): void {
    console.log('hover craft');
  }

  onButtonClick(): void {
    console.log('Hi There');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div> User name: ${this.model.get('name')}</div>
        <div> User name: ${this.model.get('age')}</div>
        <input />
        <button>Click Me</button>
      </div>
    `;
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

  render(): void {
    // append template to parent
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template(); // use string template to create html element 'template'

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
