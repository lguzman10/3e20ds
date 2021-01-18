function Node(element){
    this.element = element;
    this.next = null;
}
function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.insert = insert;
    this.display = display;
    this.find = find;
   // this.remove = remove;
}
function find(item){
    var currNode = this.head;
    while (currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function display() {
    var currNode = this.head;
    while (!(currNode.next == null) &&
    !(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
// main program
var cities = new LList();
cities.insert("Banana", "head");
cities.insert("Conway", "Banana");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.insert("Coco", "Alma");
cities.display();



