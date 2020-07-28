const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring
// const { age, name }: { age: number; name: string } = profile; // we expect profile to be an object with an age prop that is a number
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
