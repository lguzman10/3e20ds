//fibonacci

let n = 10;

let a = 0, b = 1, c;

for(let k = 0; k < n; k++)
{
	console.log(a);
	c = a + b;
	a = b;
	b = c;
}
