//Aleatorios

let aleatorios = new Array(10);
let max = 10;
let min = 1;

for ( let k =  1; k <= aleatorios.length; k++) {

	let r = Math.floor(Math.random() * (max - min))+ min;
	console.log(r);

}