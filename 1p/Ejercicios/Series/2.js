//-1, 3, -5

let n = 20;
let signo;

for (let i = 1; i <= 20; i++) 
{
    if (i%2 == 1) 
    {
        if (i == 1||i == 5||i == 9||i == 13||i == 17) 
        {
            signo = (i-(i*2));    
        }
        else
        {
            signo = i;
        } 
        console.log(signo)    
   }
}

