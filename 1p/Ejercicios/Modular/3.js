//Qué día será en 11 días?

const incremento = 11;
const today = 1;
const proximosDias = today + incremento % 7;

Today(today);
proximos(proximosDias)
























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


function proximos(dia)
{
    if(dia == 0)
    {
        console.log('El día después de 11 días será Domingo');
    }
    if (dia == 1)
    {
        console.log('El día después de 11 días será Lunes');
    }
    if(dia == 2)
    {
        console.log('El día después de 11 días será Martes');
    }
    if(dia == 3)
    {
        console.log('El día después de 11 días será Miercoles');
    }
    if(dia == 4)
    {
        console.log('El día después de 11 días será Jueves');
    }
    if (dia == 5)
    {
        console.log('El día después de 11 días será Viernes');
    }
    if (dia == 6)
    {
        console.log('El día después de 11 días será Sábado');
    }
}







