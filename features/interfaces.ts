interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinky = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary());
// };

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// drinky and oldCivic are both of type Reportable technically!!
// can interact with different types of objects via single interface / function
printSummary(oldCivic);
printSummary(drinky);
