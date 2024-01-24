let arr =[6, 3, 17, 7, 14];
let sum = 21;
flag=0

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]+ arr[j] == sum){
        console.log(arr[i], arr[j]);
        flag=1
        }
    }
}
if(flag==0){
    console.log("Not Found");
}