import { User } from './models/User';

const user = new User({ name: 'newnew', age: 0 });

// user.set({ name: 'HERALD', age: 1000 });

user.events.on('change', () => {
  console.log('change!!!');
});

user.events.trigger('change');
