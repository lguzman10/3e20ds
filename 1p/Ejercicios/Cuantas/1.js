//avg

let s = [3, 1, 4, 2, 3];
let suma = 0;

for (var i = 0; i < s.length; i++) {
	suma += s[i];
}

let avg = suma / s.length;

console.log('El promedio del array es: ' + avg);
