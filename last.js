const arr=[1, 2, 3, 4, 5, 6, 7, 8];
let arr1=[];
let position=9;
let element=arr[0];

for(let i=0; i<arr.length-1; i++){
    arr[i]=arr[i+1];
    arr1[i]=arr[i];
    arr[position-1]=element;
}
console.log(arr1);