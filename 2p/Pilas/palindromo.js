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

function isPalindrome(word){
    let s = new Stack();
    for (let i = 0; i < word.length; ++i){
        s.push(word[i]);
    }
    let rword = "";
    while (s.length() > 0){
        rword += s.pop();
    }
    if (word == rword){
        return true;
    }
    else {
        return  false;
    }
}

let word = "Apple";
if (isPalindrome(word)){
    console.log(word + " es un palíndromo")
}
else {
    console.log(word + " no es un palíndromo")
}

word = "dad";
if (isPalindrome(word)){
    console.log(word + " sí es un palíndromo")
}
else {
    console.log(word + " no es un palíndromo")
}
