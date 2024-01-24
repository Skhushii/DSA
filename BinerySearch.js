const myArray = [1, 2, 3, 5, 8, 12, 7, 10, 9];
const targetElement = 10;
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === target) {
        return mid; 
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1; 
      }
    }
    return -1;
  }

  const result = binarySearch(myArray, targetElement);
  
  if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}.`);
  } else {
    console.log(`Element ${targetElement} not found in the array.`);
  }
  