function factorial(n, r=1)
{
    if (n === 0)
    {
        return r;
    } 
    else 
    {
        return factorial(n-1, r*n);
    }
}

let n = 10;
console.log(factorial(n));