import 'reflect-metadata'; // imports global var "Reflect"
const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'ahoy matey', plane); // adding in a secret property "note" with val "ahoy matey"
Reflect.defineMetadata('height', 10, plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

Reflect.defineMetadata('note', 'ahoyyy', plane, 'color'); // attaches metadata with key "note", val "ahoyyy" to the "color" property

const color_note = Reflect.getMetadata('note', plane, 'color');
// console.log(color_note);

// class stuff
@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', path, target, key); // adding metadata to the target's key
  };
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly'); // can reach directly into prototype but we'd rather not do this

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path);

    // router.get(path, target.prototype[key]);
  }
}
