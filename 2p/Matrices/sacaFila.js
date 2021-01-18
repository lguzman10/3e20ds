class Fila{
    constructor(matriz, fila){
        this.matriz = matriz;
        this.fila = fila;
    }

    sacarFila() {
        let row = [];
        for (let i = 0; i < this.matriz[0][row.length]; i++)
        {
            row[i] = this.matriz[this.fila][i];
        }

        return row;
    }
}

let array = new Fila(
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]],
1);

console.log(array.sacarFila());
