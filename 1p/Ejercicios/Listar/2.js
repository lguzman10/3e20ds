//Permutaciones

let s = [3, 1, 4, 2, 3];

function permutaciones(n)
{
	var array = [];

	function permutar(arr, data)
	{
		var actual, memorizacion = data || [];

		for(var i = 0; i < arr.length; i++)
		{
			actual = arr.splice(i, 1)[0];
			if(arr.length == 0) array.push(memorizacion.concat([actual]));
			permutar(arr.slice(), memorizacion.concat([actual]));
			arr.splice(i, 0, actual);
		}
		return array;
	}

	return permutar(n);
}

console.log(permutaciones(s));

console.log("la complejidad computacional es lineal");




