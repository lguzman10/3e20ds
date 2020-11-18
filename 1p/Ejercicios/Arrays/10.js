//sen x

let numeros = new Array(10);

for (let i = 0; i < numeros.length; i++) 
{
    numeros[i] =  Math.sin(i);
    console.log("El seno del número "+ i +" es: " + numeros[i]);
}