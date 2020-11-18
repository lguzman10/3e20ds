//Números primos

let n = 10, j = 1, k = 0;
let b = 0;

while(j <= n)
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

