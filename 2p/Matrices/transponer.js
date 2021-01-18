class Transponer
{
    transposeArray(array){
        let newArray = [];
        for(let i = 0; i < array.length; i++){
            newArray.push([]);
        }

        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length; j++){
                newArray[j].push(array[i][j]);
            }
        }

        return newArray;
    }
}


let arr = new Transponer();

console.log(arr.transposeArray([
    [1, 2, 3],
    [3, 4, 5],
    [4, 5, 6]
]));




/*class Solution {
    solve(matrix) {
        let arr=[];
        for(let i=0;i<matrix.length;i++){
            arr.push([])
            for(let j=0;j<matrix.length;j++){
                arr[i].push(matrix[j][i])
            }
        }
        return arr
    }
}

let arr = new Solution();
console.log(arr.solve(
    [
            [1, 2, 3],
            [4, 5, 6]
            [7, 8, 9]]));
            */