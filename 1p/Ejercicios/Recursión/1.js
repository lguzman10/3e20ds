//generar 10e6 númreos aleatorios

let aleatorios = [];
var x = Math.pow(10,6); 
let inversiones = 0;

function Burbuja()
{
 for(i = 0; i < aleatorios.length; i++)

   for(j = 0; j< aleatorios.length ; j++)
   {
      if(aleatorios[j]>aleatorios[j+1])
      {
          let a = aleatorios[j]        
          aleatorios[j] = aleatorios[j + 1];   
          aleatorios[j + 1] = a; 
      
          inversiones++;
        }
    }

 console.log("Números aleatorios ordenados: ");

 for(i = 0; i < aleatorios.length; i++)
  {
    console.log( "posición [",i,"] =", +aleatorios[i] );
  }
}


for(i = 0; i < x; i++)
{
    aleatorios.push(Math.round(Math.random()*(999999 - 0) + 0)); 
}

console.time();
Burbuja();
console.timeEnd();

console.log("Inversiones necesarias: ", +inversiones);

//Tiempo de ejecución: 153327.650ms
//Inversiones necesarias:  2491433662
//Se podría mejorar utilizando otras implementaciones de algoritmos de ordenamiento un poco más complejos