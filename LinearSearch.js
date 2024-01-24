  let myArray = [1, 2, 3, 5, 8, 12, 7, 10, 9];
  let targetElement = 10;

  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; 
      }
    }
    return -1; 
  }
  
  let result = linearSearch(myArray, targetElement);
  
  if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}.`);
  } else {
    console.log(`Element ${targetElement} not found in the array.`);
  }
  