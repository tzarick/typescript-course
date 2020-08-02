import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

// T is like User, K is like UserProps
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse): void => {
      response.data.forEach((val: K) => {
        this.models.push(this.deserialize(val));
      });
    });

    this.trigger('change');
  }
}
