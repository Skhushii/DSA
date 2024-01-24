const arr = [11, 22, 33, 44, 55, 66];
const arr1=[];
// let length=arr.length-1;
for (let i = 0; i <arr.length-1; i++) {
    arr[i] = arr[i + 1];
    arr1[i]=arr[i];
}
console.log(arr1);

