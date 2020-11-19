//Qué horas serán serán en 2500hrs?


const tiempo = 2500;

let currentHour = 10;
let anteriorHora = currentHour - tiempo%24;


console.log('Hora actual: ' +currentHour+ ':00:00 horas'); 

console.log('Hace 2500hrs fueron las: '+anteriorHora+ ':00:00 horas')


