//Quinto número de la sucesión de Fibonacci

let fibonacci = function(n){
	let memorizacion = [0, 1];
	let fibo = function(n){
		let resultado = memorizacion[n];

		if (typeof resultado != 'number') {
			resultado = fibo(n - 1, memorizacion) + fibo(n - 2, memorizacion);
			memorizacion[n] = resultado;
		}

		return resultado;

	};

	return fibo;
}();

console.log('El Quinto número de la sucesión de fibonacci es: ' + fibonacci(5-1));