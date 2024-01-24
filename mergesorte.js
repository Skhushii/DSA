let arr = [];
let startIndex = 0;
let endIndex = arr.length - 1; 

function mergeSort(arr, startIdx, endIdx) {
    if (startIdx < endIdx) { 

        const midIdx = Math.floor((startIdx + endIdx) / 2);

        mergeSort(arr, startIdx, midIdx);
        mergeSort(arr, midIdx + 1, endIdx);
        merge(arr, startIdx, midIdx, endIdx);
    }
}

function merge(arr, startIdx, midIdx, endIdx) {
    const leftArr = arr.slice(startIdx, midIdx + 1);
    const rightArr = arr.slice(midIdx + 1, endIdx + 1);

    let i = 0, j = 0, k = startIdx;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
         
    }

    while (i < leftArr.length) {
        arr[k++] = leftArr[i++];
    }

    while (j < rightArr.length) {
        arr[k++] = rightArr[j++];
    }
}

mergeSort(arr, startIndex, endIndex);
console.log(arr);

