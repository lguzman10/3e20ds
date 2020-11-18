//Números primos

let primos = new Array(10);
let j = 1, k = 0;
let b = 0;

while(j <= primos.length)
{
	while(k < j)
	{
		if(j % k == 0 && k != 1 && k != j)
		{
			b = 1;
		}

		k++;
	}

	if(b == 0)
	{
		console.log(k);
	}
	else{
		b = 0;
	}

	j++;
	k = 0;
}

