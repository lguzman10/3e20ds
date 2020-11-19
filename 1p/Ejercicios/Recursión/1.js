//Seno Recursivo 

function SenoRecursivo(x, i, n)
{
	if(n > 0)
	{
		if(i%2 != 0)
		{
			console.log("+" +x+ ' ^ ' +(i*2-1)+ ' / ' +(i*2-1)+ "! ");
		}
		else
		{
			console.log("-" +x+ ' ^ ' +(i*2-1)+ ' / ' +(i*2-1)+ "! ");
		}

		SenoRecursivo(x, i+1, n-1);
	}

}

let n = 10, x = 5;

SenoRecursivo(x, 1, n);