//repetidos

var s = [3, 1, 4, 2, 3];
var a, b, c;

NumerosRepetidos(s);

function NumerosRepetidos(arr)
{
	for (let i = 0; i < s.length; i++) 
	{
		a = s[i];
		c = i + 1

		for (let j = c; j < s.length; j++)
		{
			b = s[j];

			if (a == b) 
			{
				console.log('Existen números repetidos');
				console.log('Este(estos) número(s) se repite(n): ' + b);
			}			
		}
		
	}
}


