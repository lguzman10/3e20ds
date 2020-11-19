//tomar tiempo e imprimir resultado para, n=10e4, 10e5, 10e6

let potencias = new Set();
      
	potencias.add('10e4 = ' + Math.pow(10,4)).add('10e5 = ' + Math.pow(10,5)).add('10e6 = ' + Math.pow(10,6));

console.time();
console.log(potencias);
console.log('Tiempo de ejecución: ');
console.timeEnd();