export class Attributes<T> {
  constructor(private data: T) {}
  get = <K extends keyof T>(key: K): T[K] => {
    // arrow function = a bound function: binds 'this' to Attribute instance correctly, instead of propogating User
    return this.data[key];
  };

  set = (update: T): void => {
    // should probably be using arrow functions 99% of the time for function declarations here
    Object.assign(this.data, update); // overwrites this.data with update values
  };

  getAll = (): T => {
    return this.data;
  };
}
