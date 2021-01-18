class Nodo {
    constructor(data, next, previous) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}
class Llist {
  constructor() {
    this.head = null;
    this.queue = null;
    this.size = 0;
  }

  addHead(data) {
    const newNode = new Nodo(data, this.head, null);
    if (this.head)
    {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    else {
      this.head = newNode;
      this.queue = newNode;
    }
    this.size ++;
  }

  addQueue(data) {
    const newNode = new Nodo(data, null, this.tail);
    if (this.queue) {
      newNode.previous = this.queue;
      this.queue.next = newNode;
      this.queue = newNode;
    }
    else {
      this.queue = newNode;
      this.head = newNode;
    }
    this.size ++;
  }
  imprimir() {
    let actual = this.head;
    let resultado = "";
    while (actual) {
      resultado += actual.data + " <-> ";
      actual = actual.next;
    }
    return (resultado);
  }


  eliminarCabeza() {
    if (!this.head) {
        return null
    };

    const valueToReturn = this.head.data;

    if (this.head === this.queue) {
        this.head = null;
        this.queue = null;
    } else {
        this.head = this.head.next;
        this.head.previous = null;
    };
    this.size--;
    return valueToReturn;
}

eliminarCola() {
    if (!this.queue)
    {
        return null
    };

    const valueToReturn = this.queue.data;

    if (this.head === this.queue) {
        this.head = null;
        this.queue = null;
    } else {
        this.queue = this.queue.previous;
        this.queue.next = null;
    };
    this.size --;
    return valueToReturn;
};

  removeVertex(datos) {
    let actual = this.head;
    let anterior = null;

    while(actual !== null) {
        if (actual.data === datos) {
            if (!anterior) {
                this.eliminarCabeza();
            } else if (!actual.next) {
                this.eliminarCola();
            } else {
                anterior.next = actual.next;
                actual.next.previous = anterior;
            };
            this.size --;
            return actual.data;
        };
        anterior = actual;
        actual = actual.next;
    };
    return null;
}

    getSize() {
        return this.size;
    }
}


const dobleList = new Llist();

dobleList.addHead(3);
dobleList.addHead(4);
dobleList.addHead(2);
dobleList.addHead(6);

dobleList.addQueue(2);
dobleList.addQueue(4);
dobleList.addQueue(5);
dobleList.addQueue(7);

console.log(`Lista actual: ${dobleList.imprimir()} \n Tamaño de la lista actual ${dobleList.getSize()}`);
console.log(`Los nodos: ${dobleList.removeVertex(3)} y ${dobleList.removeVertex(7)} fueron eliminados`)
console.log(`Lista nueva: ${dobleList.imprimir()} \n Tamaño de la nueva lista: ${dobleList.getSize()}`);
