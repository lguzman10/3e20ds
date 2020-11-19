//Qué día fue hace 11 días

const decremento = -11;
const today = 1;
const anterior = today - decremento%7 ;

Today(today);
Anteriores(anterior);

























function Today(today)
{
    if(today == 0)
    {
        console.log('El dia de hoy es Domingo');
    }
    if (today == 1)
    {
        console.log('El dia de hoy es Lunes');
    }
    if(today == 2)
    {
        console.log('El dia de hoy es Martes');
    }
    if(today == 3)
    {
        console.log('El dia de hoy es Miercoles ');
    }
    if(today == 4)
    {
        console.log('El dia de hoy es Jueves ');
    }
    if (today == 5)
    {
        console.log('El dia de hoy es Viernes ');
    }
    if (today == 6)
    {
        console.log('El dia de hoy es Sábado ');
    }
}

function Anteriores(anterior)
{
    if(anterior == 0)
    {
        console.log('Hace 11 dias fue Domingo');
    }
    if(anterior == 1)
    {
        console.log('Hace 11 dias fue Lunes');
    }
    if( anterior == 2)
    {
        console.log('Hace 11 dias fue Martes');
    }
    if(anterior == 3)
    {
        console.log('Hace 11 dias fue Miercoles');
    }
    if(anterior == 4)
    {
        console.log('Hace 11 dias fue Jueves');
    }
    if (anterior == 5)
    {
        console.log('Hace 11 dias fue Viernes');
    }
    if (anterior == 6)
    {
        console.log('Hace 11 dias fue Sabado');
    }

}
