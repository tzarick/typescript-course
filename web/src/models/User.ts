import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  // ? = optional
  id?: number; // will be given by backend server
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(private data: UserProps) {}
}
