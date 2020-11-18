//Números aleatorios

process.stdout.write('Ingrese la cantidad de números aleatorios a generar: ')
let n = process.openStdin();

n.addListener("data", function(n)
{
	let aleatorios = [];
	for (let i = 0; i < n; i++) 
	{
    	aleatorios[i] = Math.random() * [n - 1] + 1;
    	console.log(Math.round(aleatorios[i]))
	}

process.exit();
});



