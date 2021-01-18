class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data){
        let newNode = new Node(data, null);
        if(!this.head){
            this.head = newNode;
        }
        else
            {
            let current = this.head;
            while(current.next)
            {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    removeNode(index){
        if (index < 0 || index > this.size) return null;

        let current = this.head;
        let previous = null;

        if(index === 0) current = this.head;
        else
        {
            for(let i = 0; i < index; i++)
            {
                previous = current;
                current = current.next;
            }
            previous = current;
        }

        return current.data
    }
    getSize(){
        return this.size;
    }
}

let ll = new LList();
let matriz = [8, 9, 8, 3, 2, 1, 2, 4, 5, 4];

console.log("La matriz a transformar es la siguiente: ");
console.log(matriz);

for (let i = 0; i < matriz.length; i++){
   ll.add(matriz[i]);
}
console.log("Lista resultante de la matriz: ");
console.log(ll);