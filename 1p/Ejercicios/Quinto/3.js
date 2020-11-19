//Quinto número factorial

let factorial = function(){
	let memorizacion = [];
	let facto = function(n)
	{
		let resultado = memorizacion[n];
		
		if (typeof resultado != 'number') 
		{
			resultado = n == 0 || n == 1 ? 1 : n * factorial(n-1);
			memorizacion[n] = resultado;
		}

		return resultado;

	};

	return facto;
}();

console.log('El Quinto número factorial de 10 es: ' + factorial(10));