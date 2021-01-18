function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length-1];
}
function toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    return this.dataStore.length === 0;
}

function Dancer(name, genero){
    this.name = name;
    this.genero = genero;
}
function getDancers(male, female) {
    let names = dancers.split("\n");
    for (let i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for (let j = 0; j < names.length; ++j) {
        let dancer = names[j].split(" ");
        let sex = dancer[0];
        let name = dancer[1];
        if (sex === "F") {
            femaleDancers.enqueue(new Dancer(name, sex));}
        else {
            maleDancers.enqueue(new Dancer(name, sex));
        }
    }
}
function dance(males, females) {
    console.log("Las parejas de baile son: \n");
    let person;
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log("\nLa bailarina es: " + person.name);
        person = males.dequeue();
        console.log("y el bailarín es: " + person.name);
    }
    console.log();
}

let dancers =
    'F Allison McMillan\n' +
    'M Frank Oz\n' +
    'M Mason McMillan\n' +
    'M Clayton Ruff\n' +
    'F Cheryl Fer\n' +
    'M Raymond Williams\n' +
    'F Jennifer Ingram\n' +
    'M Bryan Frazer\n' +
    'M David Dur\n' +
    'M Danny Martin\n' +
    'F Aurora Any';

let maleDancers = new Queue();
let femaleDancers = new Queue();

getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()){
    console.log(femaleDancers.front().name + " está esperando para bailar");
}
if (!maleDancers.empty()){
    console.log(maleDancers.front().name + " está esperando para bailar");
}









