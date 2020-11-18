//sen x = x - x^3/3! + ... -


process.stdout.write('Ingrese la cantidad de números a generar: ')
let n = process.openStdin();

n.addListener("data", function(n)
{
	process.stdout.write('Ingrese el valor de x: ')
    let x = process.openStdin();

    x.addListener("data", function(x)
    {
    	let sen = [];

    	for (let k = 1; k <= n; k++) 
    	{
   
        	if(n > 0)
        	{
            	sen[k]= '1';
            	console.log(sen[k]);
        	}

        	if(k%2 !== 0)
        	{
            	sen[k] = '+' +x+ '^' +(k*2*1)+ ' / ' +(k*2-1)+ '! ';
            	console.log(sen[k]);
        	}
    		
    		else
    		{
        		sen[k] = '-' +x+ '^' +(k*2*1)+ ' / ' +(k*2-1)+ '! ';
        		console.log(sen[k]);
    		}       

    	}
    
    	process.exit();
   
	})

})
