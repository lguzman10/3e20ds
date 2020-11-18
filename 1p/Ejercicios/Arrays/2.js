//-1, 3, -5...

let array = new Array(10);

for (let i = 1; i <= 20; i++) 
{
    if (i%2 == 1) 
    {
        if (i == 1||i == 5||i == 9||i == 13||i == 17) 
        {
            array[i] = (i-(i*2));    
        }
        else
        {
            array[i] = i;
        } 
        console.log(array[i])    
   }
}

