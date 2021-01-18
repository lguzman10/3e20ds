class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    add = (data, toNodeData) => {
        const node = new Node(data);
        const parent = toNodeData ? this.findBFS(toNodeData):null;
        if(parent)
            parent.children.push(node);
        else
        if(!this.root)
            this.root = node;
        else
            return 'Error: Intentó almacenar en la raíz, la raíz ya existe'
    }
    findBFS = data => {
       // const queue = [this.root];
        let _node = null;
        this.traverseBFS((node) => {
            if (node.data === data)
                _node = node;
        })
        return _node;}

    traverseBFS = cb => {
        const queue = [this.root]
        if(cb)
            while(queue.length) {
                const node = queue.shift();
                cb(node)
                for(const child of node.children)
                    queue.push(child)
            }
    }
}
(
    function test() {
        let tree = new Tree();
        tree.add('A')
        tree.add('B', 'A')
        tree.add('C', 'A')
        tree.add('D', 'B')
        tree.add('E', 'B')
        tree.add('F', 'C')
        tree.traverseBFS((node) => {console.log('Current Node: ', node)})
    })()