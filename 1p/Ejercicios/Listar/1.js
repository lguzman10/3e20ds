//PowerSet

let s = [3, 1, 4, 2, 3];

function PowerSet(conjunto)
{
	return conjunto.reduce((acc, el) => acc.concat(acc.map(c => [el].concat(c))), [[]]);
}

console.log(PowerSet(s));



