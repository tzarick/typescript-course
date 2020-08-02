import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  // able to use this shortened syntax because we aren't assigning anything within our constructor (happens after)
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  // get on() {
  //   // direct pass through
  //   return this.events.on; // return a reference to the events.on method -> not trying to call a function. The Caller is responsible for using it / adding args
  // }

  // get trigger() {
  //   // direct pass through
  //   return this.events.trigger;
  // }

  // get get() {
  //   // direct pass through
  //   return this.attributes.get;
  // }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      // if id does not exist
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
