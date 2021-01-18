class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class lList
{
    constructor() {
        this.head = null; 
        this.size = 0;
    }

    add(data)
    {
        let newNode = new Node(data,null);
        if(!this.head) {
            this.head = newNode
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }                           
            current.next = newNode;
        }
        this.size++; 

    }
    getSize(){
        return this.size
    }

    removeFrom(index) {
    if (index < 0 || index > this.size)
        return null;
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
        current = previous;
     }

      return current.data
    }

    print()
    {
        if(!this.size)
            return null;

        let current = this.head;
        let result = "";
        while(current)
        {
            result += current.data += " -> ";
            current = current.next;
        }
        result += "x";
        return (result);
    }
}

class matriz
{
    constructor(){}

    in2list(matriz,size,auxiliar)
    {
        for(let i = 0; i < size; i++)
        {
            matriz[i] = ll.removeFrom(i);
            auxiliar[i] = matriz[i]
        }
        
    }
}
let ll = new lList();
ll.add(5);
ll.add(3);
ll.add(4);
ll.add(8);
ll.add(2);
ll.add(1);

let m = new matriz();
let auxiliar = []
m.in2list(auxiliar, ll.getSize(),auxiliar);

console.log("La lista ", ll.print(), "Fue transformada en una matriz");
console.log("La matriz resultante es: ");
console.log(auxiliar);