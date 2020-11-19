console.log('<-------------- Maps --------------->\n');

let myMap = new Map([['Marca: ', 'Volkswagen'], ['Modelo: ', 'Jetta']]);

console.log(myMap);
console.log('Map size: ' +myMap.size);

console.log('<-------------- WeakMaps --------------->\n'); //SOn estructuras débiles al igual que WeakSet y son de tipo Object

const { inspect } = require('util');
let myWeakMap = new WeakMap();

let key = {

  id: 343
}

let car343 = {

  marca: 'Volkswagen',
  modelo: 'Jetta'
}

myWeakMap.set(key, car343);

console.log(console.log(inspect(myWeakMap, { showHidden: true })));
