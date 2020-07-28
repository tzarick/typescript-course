let apples = 5; // same line, type inference
let banana;
banana = 2; // diff line, type any
let speed: string = 'fast'; // type annotation
let hasName: boolean = true;

let nothingMuch: null = null; // val with name same as type
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes -- traditionally, classes start with upper case letter
// class Car {}
// let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 1.234e5,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  // left of equals is annotation, right of equals is function
  console.log(i);
};

// When to use annotation:
// 1) Function that returns the 'any' type
const json = '{"x" : 10, "y": 20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);

// 2) When we declare a var on one line and init it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // could be one of the two types

numbers.forEach((num) => {
  if (num > 0) {
    numberAboveZero = num;
  }
});
