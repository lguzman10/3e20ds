//max

let s = [3,1,4,2,3];
let max = 0;
 
for(i = 0; i < s.length; i++){
    if (s[i] > max)
    {
        max = s[i];
    }
}
 
console.log('El número mayor es: ' + max);