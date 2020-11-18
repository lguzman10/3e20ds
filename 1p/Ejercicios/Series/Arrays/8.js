//Potencias

let potencias = new Array(10);
const x = 3;

for(let k = 1; k <= potencias.length; k++){

	let exp = Math.pow(x,k);
	console.log(x + " elevado a la " + k + " = " + exp);
}