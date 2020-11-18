//fibonacci

let arr = new Array(10);

let a = 0, b = 1, c;

for(let k = 1; k <= arr.length; k++)
{
	console.log(a);
	c = a + b;
	a = b;
	b = c;
}