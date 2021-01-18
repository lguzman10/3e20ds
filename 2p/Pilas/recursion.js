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

function fact(n) {
    let s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    let product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

console.log(fact(7));
