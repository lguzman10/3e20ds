//combinaciones

let s = [3, 1, 4, 2, 3];

function combinaciones(list) { 
  var result = []; 
  var loop = function (start,depth,prefix) { 
    for(let i=start; i<s.length; i++) 
      { 
        var next = prefix+s[i]; 
        if (depth > 0) loop(i+1,depth-1,next); 
        else result.push(next); 
      } 
    } 
    for(let i=0; i<s.length; i++) 
      { 
        loop(0,i,''); 
      } 
      return result; 
    }

console.log(combinaciones(s)); 

console.log("Complejidad computacional : cuadratica");
