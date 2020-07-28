const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// const pepsi = ['brown', true, 40]; // issue: we can freely swap order of elements. This array accepts all 3 types
// if we break the order, our data model breaks down

// type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40]; // order now matters

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 20];

const carSpecs: [number, number] = [400, 3354]; // purpose of the numbers is not clear

const carStats = {
  // more descriptive
  horsepower: 400,
  weight: 3354,
};

// tuples may be useful with excel
