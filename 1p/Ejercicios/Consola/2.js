//potencia x elevado a la k

process.stdout.write('Ingrese la cantidad de potencias a generar: ')
let n = process.openStdin();

n.addListener("data", function(n)
{
    //let x = 10;

    process.stdout.write('Ingrese el número que desea elevar: ')
    var x = process.openStdin();

    x.addListener("data", function(x)
    {
    	var numerosP = [];
    	for (var y = 1; y <= n; y++) 
    	{
       		numerosP[y] = (x + " ^ " + y + " = " + Math.pow(x, y));
       
       		console.log(numerosP[y]);
    	}
    
    	process.exit();	
    })
    
})
