// class HoldNumber {
//   data: number;
// }
// class HoldSting {
//   data: string;
// }
// const salad = new HoldNumber();
// salad.data = 123;

// const holdString = new holdString();
// holdString.data = 'sdfa';

// ^^ this is silly

// generics
class HoldAnything<T> {
  // type is essentially an argument
  constructor(public data: T) {}

  add(a: T): T {
    return a;
  }
}

const salad = new HoldAnything<number>(123);

const holdString = new HoldAnything<string>('hello');
