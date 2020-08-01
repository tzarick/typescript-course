import axios, { AxiosResponse } from 'axios';

interface UserProps {
  // ? = optional
  id?: number; // will be given by backend server
  name?: string;
  age?: number;
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

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    // create a new post: POST - /posts
    // update a post: PUT - /posts/:id
    const id = this.get('id');
    if (id) {
      // PUT
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // POST
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
