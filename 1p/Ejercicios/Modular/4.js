//Qué hora será en n horas

const n = 12;
let currentHour = 10;
var proximaHora = currentHour + n % 24;


console.log('Hora actual: '+currentHour+ ':00:00'); 

console.log('La hora dentro de '+ n +' horás será: ' +proximaHora+ ':00:00');

