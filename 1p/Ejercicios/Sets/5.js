//Sets

console.log('<--------------- Set -------------->'); //Muestra en conjunto de elementos 

let arrayNames = ['Manzanas', 'Casa', 'Cortina', 'Sofia', 'Judiel'];

let Nombres = new Set(arrayNames);

Nombres.add('Leonel');

console.log(Nombres); 
console.log('Size set: ' +Nombres.size+ ' elements');

//WeakSets

console.log('<--------------- WeakSet -------------->'); //Muestra una colección de objetos 

const { inspect } = require('util');
let frutasWeakSet = new WeakSet();

let c1 = {

  nombre: 'Manzanas',
  tipo:'Fruta'
}

frutasWeakSet.add([c1]); 

let c2 = {

  nombre: 'Aguacate',
  tipo: 'Fruta'
}

frutasWeakSet.add([c2]);

console.log(inspect(frutasWeakSet, { showHidden: true }));
