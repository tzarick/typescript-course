interface UserProps {
  name?: string; // optional
  age?: number; // optional
}

type Callback = () => void; // type alias to keep things clean

export class User {
  events: { [key: string]: Callback[] } = {}; // we don't know the names of the events (keys) at this time - use the [x: type] notation for dynamic names

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); // overwrites this.data with update values
  }

  on(eventName: string, callback: Callback) {
    // this.events[eventName] // Callback[] or undefined
    const handlers = this.events[eventName] || []; // if undefined, an empty array will be assigned
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      // undefined or no handlers exist
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }
}
