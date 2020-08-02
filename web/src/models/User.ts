import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

export interface UserProps {
  // ? = optional
  id?: number; // will be given by backend server
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  // a reason for the modularity / composition:
  // static buildLocalUser(attrs: UserProps): User {
  //   return new User{
  //     new Attributes<UserProps>(attrs),
  //     new Eventing(),
  //     new LocalSync<UserProps>(rootUrl)
  //   }
  // }

  isAdminUser(): boolean {
    return this.get('id') === 1;
  }
}

const user = User.buildUser({});
user.get('id');
