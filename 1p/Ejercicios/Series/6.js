//lucas

let n = 10;

let a = 2, b = 1, c;

for(let k = 1; k <= n; k++)
{
	console.log(a);
	c = b;
	b = a + b;
	a = c;
}