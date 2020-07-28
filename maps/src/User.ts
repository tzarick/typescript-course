import faker from 'faker'; // looks through node_modules
import { Mappable } from './CustomMap';

export default 'blue'; // typically don't use default export statements in TS world. don't have to worry about whether or not to use curly braces
export const red = 'red';

export class User implements Mappable {
  name: string;
  location: {
    // we are responsible for initialization of object and properties inside
    lat: number;
    lng: number;
  };
  color: string = 'yellow';

  constructor() {
    this.name = faker.name.firstName();
    // console.log(this.location); // would be undefined
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
