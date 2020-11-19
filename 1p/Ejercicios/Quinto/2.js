//Quinto número de la serie de Lucas

let lucas = function(){
	let memorizacion = [2, 1];
	let luc = function(n){
		let resultado = memorizacion[n];

		if (typeof resultado != 'number') {
			resultado = luc(n - 1) + luc(n - 2);
			memorizacion[n] = resultado;
		}

		return resultado;

	};

	return luc;
}();

console.log('El quinto de número de la serie es: ' + lucas(5-1));

//2,1,3,4,7,11,18,29,47,76