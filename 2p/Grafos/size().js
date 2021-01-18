class graphBuild {

    constructor(m) {
        this.matriz = m;
        this.length = this.matriz.length;
    }

    addVertex(v)
    {
        this.matriz[v] = 0;
    }

    addEdge(v,w){
        if(typeof (this.matriz[v]) === 'number')
        {
            this.matriz[v] = [];
        }
        this.matriz[v][w] = 1;

    }

    fillMatrix() {
        for (let i = 0; i < this.matriz.length; i++)
        {
            for (let j = 0; j < this.matriz.length; j++)
            {
                if (this.matriz[i][j] === undefined)
                    this.matriz[i][j] = 0;
            }
        }
    }

    showGraph() {
        let showG = "\n";
        for (let i = 0; i < this.matriz.length; i++)
        {
            showG += "\n";
            for (let j = 0; j < this.matriz.length; j++)
            {
                showG += this.matriz[i][j] + ' ';
            }
        }
        return showG;
    }

    sizeVertex() {
        let vertexNum = 0;
        for (let i = 0;i < this.matriz.length; i++)
        {
            vertexNum++;
        }
        return vertexNum;
    }

    print(){
        console.log(this.showGraph());
    }

}
class gSample{
    New()
    {
        return [];
    }
}

let sg = new gSample();
let g = new graphBuild(sg.New());    //Creamos nuestro grafo en base al simple

g.addVertex(0);
g.addVertex(1);
g.addVertex(2);

g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(2,1);

g.fillMatrix();

console.log("Grafo resultante: ");
g.print();

console.log("\nNúmero de vertices: "+ g.sizeVertex());