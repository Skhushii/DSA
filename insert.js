const arr=[1, 2, 3, 4, 5, 6, 7, 8];
let position=2;
let element=10;
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
for( let j=arr.length; j>=1; j--){
    arr[j]=arr[j-1];
}
arr[position-1]=element;
console.log(arr);