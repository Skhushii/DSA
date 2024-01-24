const array = Array.from({ length: 50 }, (_, index) => index + 1);


console.log("1. ", array);

// 2. Print each element on a new line
console.log("2. ");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 3. Print the array in reverse order
console.log("3. ");
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// 4. Print only even numbers
console.log("4. ");
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}

// 5. Print only odd numbers
console.log("5. ");
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    console.log(array[i]);
  }
}
