//Creación de una pila
function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
//Función eliminar
function push(element){
    this.dataStore[this.top++] = element;
}
//Función vistazo
function peek(){
    return this.dataStore[this.top-1];
}
//Función eliminar
function pop(){
    return this.dataStore[--this.top];
}
//Función para limpiar la pila
function clear(){
    this.top = 0;
}
//Función para conocer el tamaño de la pila
function length(){
    return this.top;
}

function mulBase(num, base){
    let s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    let converted = "";
    while (s.length() > 0){
        converted += s.pop();
    }
    return converted;
}

let num = 32;
let base = 2;
let newNum = mulBase(num, base);
console.log(num + " convertido a base " +base+ " es " + newNum);

num = 125;
base = 2;
newNum = mulBase(num, base);
console.log(num + " convertido a base " +base+ " es " + newNum);