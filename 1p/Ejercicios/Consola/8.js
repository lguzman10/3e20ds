//Suma armónica

let armonicos = [];

process.stdout.write('Ingrese la cantidad de números que desea generar: ')
let n = process.openStdin();

n.addListener("data", function(n)
{
   for (let k = 1; k <= n; k++) 
   {

    if(k == 1)
    {
        armonicos[k]= '1'
        console.log(armonicos[k]);
    }
    else
    {
        armonicos[k]= '+ 1/'+ k;
        console.log(armonicos[k]);
    }       
   }
process.exit();

})