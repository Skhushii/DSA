const arr=[11,22,33,44,55,66];

let position=7;
let element=9;
let last=arr[2];

for(let i=0; i<arr.length; i++){
    // arr[i]=arr[i+1];
    if(arr[i]==last){
        arr[i]=element;
    }
}
arr[position-1]=last;
console.log(arr);