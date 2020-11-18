//Factorial

process.stdout.write("Ingrese el número de factoriales a generar: ");
let n = process.openStdin();

n.addListener("data", function(n)
{
    let factorial = [];
    let total = 1;

    for (let k = 1; k <= n; k++) 
    {
        total = total * k; 
        console.log('Factorial de ' + k + ': ' + total);
    }

process.exit();

})