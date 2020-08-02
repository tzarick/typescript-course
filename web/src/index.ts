import axios, { AxiosResponse } from 'axios';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
