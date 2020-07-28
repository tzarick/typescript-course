// const carMakers: string[] = ['ford', 'toyota', 'chevy'];
// const carMakers = []; //  type of any[]
// const carMakers: string[] = []; // should annotate if empty

const carMakers = ['ford', 'toyota', 'chevy'];
const date = [new Date(), new Date()];

// 2D arrays:
const carsByMake: string[][] = [];
// const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting vals
const car1 = carMakers[0];
const myCar = carMakers.pop();

// carMakers.push(100); // doesn't allow this

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
// const importantDates = [new Date(), '2030-10-20']
const importantDates: (Date | string)[] = [new Date()]; // override inference

importantDates.push('d');
