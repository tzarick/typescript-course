// interface = instructions for other classese on how to be sortable
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  // we promise, that when we eventally inherit from other classes, these methods will be implemented
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this; // got rid of collection so we could operate directly on this

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

// class Sorter {
//   collection: number[];

//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }

//type guards
// class Sorter {
//   constructor(public collection: number[] | string) {} // union operator makes it so that we can only use commonly shared properties of these two types

//   sort(): void {
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         // all of this only works if collection is number[]
//         // if collection is an array of numbers
//         if (this.collection instanceof Array) {
//           // type guard: gives us access back to Array properties. Lifts the union restriction
//           if (this.collection[j] > this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//         }

//         // only works if collection is a string
//         // if collection is a string
//         // logic to compare/swap chars in string
//         if (typeof this.collection === 'string') {
//         }
//       }
//     }
//   }
// }
