//min

let s = [3,1,4,2,3];
let min = 1;
 
for(i = 0; i < s.length; i++){
    if (s[i] < min)
    {
        min = s[i];
    }
}
 
console.log('El mínimo es: ' + min);