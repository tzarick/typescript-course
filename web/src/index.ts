import { User } from './models/User';

const user = new User({ name: 'Jimmyboy', age: 20 });

user.on('change', () => {
  console.log('change #1');
});
user.on('change', () => {
  console.log('meat #2');
});
user.on('save', () => {
  console.log('save was triggered');
});

user.trigger('save');
