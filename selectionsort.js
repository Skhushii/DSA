let arr=[35,25,30,10,20,15];
let min;
let temp=0;

for(let i=0; i<arr.length; i++){
    min=i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[min]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);