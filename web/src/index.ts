import axios, { AxiosResponse } from 'axios';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'JAMIE', age: 24 });
const userForm = new UserForm(document.getElementById('root'), user);
userForm.render();
// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();
