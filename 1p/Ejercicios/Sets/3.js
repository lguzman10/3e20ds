//generar n nombres aleatorios

 let randomNames = new Set();
 let nombres; 
 let consonantes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", vocales = "AEIOU";
 const n = Math.pow(10, 6);

 for(let i = 0; i <= n; i++)
 {  
    let longitudCadena = Math.round(Math.random()*6);
    if (longitudCadena < 2) longitudCadena = 2;
    
    for (var j = 0; j < longitudCadena; j++) 
    {
      nombres += consonantes.charAt(Math.floor(Math.random()* consonantes.length));
      nombres += vocales.charAt(Math.floor(Math.random()* vocales.length));
    } 
  
    randomNames.add(nombres);
    nombres = "";
}

console.log(randomNames);