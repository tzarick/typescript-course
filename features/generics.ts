class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b']);
const arr = new ArrayOfAnything(['a', 'b']); // type inference

// example of generics with functions

function printStrings(arr: string[]): void {
  arr.forEach((item) => console.log(item));
}

function printAnything<T>(arr: T[]): void {
  arr.forEach((item) => console.log(item));
}

printAnything<string>(['a', 'b', 'c']);

// generic constraints:
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  // constraint on the type: we promise that the type we pass in will adhere to the interface rules
  arr.forEach((item) => item.print());
}

// printHousesOrCars(1234); // won't work
printHousesOrCars<House | Car>([new House(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);
