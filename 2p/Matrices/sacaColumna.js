class Columna{
    constructor(matriz, columna){
        this.matriz = matriz;
        this.columna = columna;
    }

    sacarColumna() {
        let column = [];
        for (let i = 0; i < this.matriz.length; i++) {
            column.push(this.matriz[i][this.columna]);
        }
        return column;
    }
}


let array = new Columna(
    [
            [1,2,3],
            [4,5,6],
            [7,8,9]],
                        0);

console.log(array.sacarColumna());


