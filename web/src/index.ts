import axios, { AxiosResponse } from 'axios';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'JAMIE', age: 24 });

const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();
