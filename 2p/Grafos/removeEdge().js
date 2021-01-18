class Grafo {
    constructor(n) {
        this.node = n
    }

    toString() {
        let show = "\n"
        for (let i = 0; i < this.node.length; i++) {
            show += "\n"
            for (let j = 0; j < this.node.length; j++) {
                show += this.node[i][j];
            }
        }
        return show;
    }

    removeEdge(i, j) {
        this.node[i][j] = 0
        console.log(graph.toString())
        console.log("\nEl arco " + i +" - " + j +" fue removido")

    }
}
let graph = new Grafo([
    [0,1,1,0],
    [1,0,0,1],
    [0,1,0,1],
    [1,0,1,0],])

console.log(graph.toString());

graph.removeEdge(1,2)