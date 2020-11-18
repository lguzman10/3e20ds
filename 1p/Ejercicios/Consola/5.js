//Ln (1+x) = x - x^2/2 + x^3/3 - ... +

let numeros = [];

process.stdout.write('Ingrese la cantidad de números a generar: ')
let n = process.openStdin();

n.addListener("data", function(n)
{
   for (let i = 1; i <= n; i++) 
   {
    if(i == 1)
    {
        numeros[i]= 'x'
        console.log(numeros[i])
    }
    else if(i%2 == 0)
    {
        numeros[i]= '- x ^ '+ i + '/' + i;
        console.log(numeros[i])
    }
    else
    {
        numeros[i]= '+ x ^ '+ i + '/' + i;
        console.log(numeros[i])  
    }
           
   }
process.exit();
})