class Vehicle {
  // superclass / parent class
  // public drive(): void {
  //   // already public by default
  //   console.log('chugga chugga');
  // }

  constructor(public color: string) {
    this.color = color;
  }
  // color: string;                                    // equivalent to above
  // constructor(color: string) {
  //   // constructor is always instantly executed when an instance is created
  //   this.color = color;
  // }
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);
// vehicle.honk(); // not allowed to access

// basic inheritance
class Car extends Vehicle {
  // child class
  constructor(public wheels: number, color: string) {
    // no public modifier to color because we don't want to override that property from Vehilce
    super(color); // this references the constructor method of the parent. We have to do this in order to construct the parent
  }
  private drive(): void {
    // if we override a method, we cannot change the modifier
    // overridden method
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car(4, 'yellow');
car.startDrivingProcess();
