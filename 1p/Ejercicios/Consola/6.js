//Ln 2 = 1 - 1/2 + 1/3 - ... +

let ln = [];

process.stdout.write('Ingrese la cantidad de números a generar: ')
let n = process.openStdin();

n.addListener("data", function(n)
{
    for (let k = 1; k <= n; k++) 
    {
   
        if(k == 1)
        {
            ln[k]= '1';
            console.log(ln[k]);
        }
        else if(k%2 == 0)
        {
            ln[k]= '-1/'+ k;
            console.log(ln[k]);
        }
    else
    {
        ln[k]= '+1/'+ k;
        console.log(ln[k]);
    }       
   
}

process.exit();
})