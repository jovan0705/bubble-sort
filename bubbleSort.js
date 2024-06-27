const bubbleSort = (array) => {
    for (let i = 0; i < array.length-1; i++) {
        let isSwap = false;
        for (let j = (array.length-2); j >= 0+i; j--) {
            if (array[j] > array[j+1]) {
                const temp = array[j]
                array[j] = array[j+1];
                array[j+1] = temp;
                isSwap = true
            }
        }
        if (!isSwap) break;
    }
    return array;
}


const arr = [5, 3, 6, 2, 1, 9, 7, 4, 8, 10];

console.log(bubbleSort(arr));