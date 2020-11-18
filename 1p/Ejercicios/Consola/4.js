//primos

process.stdout.write('Defina el límite hasta el cual desea conocer los números primos: ')
let n = process.openStdin();

n.addListener("data", function(n)
{
    primos = [];
    function numerosPrimos(n) 
    {
        let i = 1;
        while (n % ++i != 0);
        return n == i;
      }
      
      for (let i = 2; i < n; i++)

        if (numerosPrimos(i))
        {
           primos[i] = i
           console.log(primos[i])
        }

process.exit();
})