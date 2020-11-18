//factorial

let factorial = new Array(10);
let total = 1;

for (let k = 1; k <= factorial.length; k++) 
{
	total = total * k; 
	console.log("Factorial de " + k + ": " + total);
}


