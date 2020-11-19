//Quinto renglón del triángulo de Pascal

let n = 5;

var pascal = new Array(n);  

function Combinatorios(a, b)
{  
	 return  Math.round(factorial(a)/(factorial(b)*factorial(a-b)));   
}  


function factorial(num)
{  
 	let f = 1;  
 	if (num !== 0)
 	{  
  		for (let k = 1; k <= num; k++)
  		{  
   			f *= k;  
  		}  
 	}  
 
 	return f;  
}  


for (let i = 1; i <= n; i++) 
{  
	 pascal[i] = new Array(n);  
}  

for(let i = 1; i <= n; i++)  
{
	for(j=1;j<=i;j++)
 	{ 
  		pascal[i][j] = Combinatorios(i-1,j-1);  
 	}	
}
   
console.log("El quinto renglón del triangulo de pascal es : ")

for(i = 1; i <= n; i++)
{  
 	for(j = 1; j<= i; j++)
 	{  
  		if (i == n)
  		{
    		console.log(pascal[i][j]);   
  		} 
	}	   
    
}  






