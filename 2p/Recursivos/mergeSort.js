function merge(leftList, rightList){
    let arr = [];

    while (leftList.length && rightList.length) {
        if (leftList[0] < rightList[0]) {
            arr.push(leftList.shift())
        } else {
            arr.push(rightList.shift())
        }
    }
    return [ ...arr, ...leftList, ...rightList ]
}

function mergeSort(array) {
    const media = array.length / 2

    if(array.length < 2){
        return array
    }

    const left = array.splice(0, media)
    return merge(mergeSort(left),mergeSort(array))
}

array = [15, 42, 79, 0, 1, 23, -10, 2, 8, 90, 1234, 456, -3];
console.log("\nArray original: " + array);
console.log("\nArray ordenado: " + mergeSort(array));
