// // import { User } from './models/User';

// // const user = new User({ name: 'Jimmyboy', age: 20 });

// // user.on('change', () => {
// //   console.log('change #1');
// // });
// // user.on('change', () => {
// //   console.log('meat #2');
// // });
// // user.on('save', () => {
// //   console.log('save was triggered');
// // });

// // user.trigger('save');

// // import axios from 'axios';

// // axios.post('http://localhost:3000/users', {
// //   name: 'Tomby',
// //   age: 23,
// // });

// // axios.get('http://localhost:3000/users');

// // a quick reminder on accessors:

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName(): string {
//     // a getter method
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person = new Person('Tom', 'Z');
// console.log(person.fullName); // no parentheses required for a getter

// // Reminder on how 'this' works in JS

// const colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color);
//   },
// };

// const printColor = colors.printColor;

// printColor(); // whatever is to the left of the function is what 'this' is. In this case, nothing

// import axios, { AxiosResponse } from 'axios';
// import { Collection } from './models/Collection';
// import { UserProps, User } from './models/User';
// import { UserEdit } from './views/UserEdit';
// import { UserList } from './views/UserList';

// // const user = User.buildUser({ name: 'JAMIE', age: 24 });

// const root = document.getElementById('root');
// if (root) {
//   // const userEdit = new UserEdit(root, user);
//   // userEdit.render();

//   // console.log(userEdit);
//   const collection = User.buildUserCollection();
//   collection.fetch();
//   const userList = new UserList(root, collection);
//   userList.render();
// } else {
//   throw new Error('Root element not found');
// }
// // const collection = User.buildUserCollection();

// // collection.on('change', () => {
// //   console.log(collection);
// // });

// // collection.fetch();
