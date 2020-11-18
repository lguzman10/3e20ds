//triangulares

let numeros = new Array(10);
let sum;
let triangular = 0;

for (let i = 0; i < numeros.length; i++) 
{
   sum = i + 1;
   triangular = triangular + sum;
   numeros[i] = triangular;
   console.log(numeros[i])
}