//Generar 10 nombres aleatorios

let nombres = new Map();
let arr = ["Carlos", "Ricardo", "Armando", "Andrea", "Dahiana", "Aldo", "José", "Nereyda", "Simón", "Liliana"];//[...nombres];

function RandomNames(len)
{
  let randomNames = ' ';
  for(let i = 0; i < len; i++)
  {
    console.log(arr[(Math.floor(Math.random() * arr.length))]); 
  } 
}


RandomNames(10);