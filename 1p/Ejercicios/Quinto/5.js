//Quinto número primo

var counter = 0;
var number = 1;

function Primos(num)
{
   let contador = 0;

    for(let i = 1; i <= num; i++)
    {
        if(num%i == 0)
        {
            contador++;
        }
    }

    if(contador <= 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}


function QiuntoNumero(){

    if(Primos(number))
    {
        number++;

        if(counter < 5)
        {
            counter++;
            QiuntoNumero();
        }
        else if(counter == 5)
        {
            console.log('El quinto número primo es: ');
            console.log(number-1);
        }
    }
    else
    {
        number++;
        QiuntoNumero();
    }
}

QiuntoNumero();