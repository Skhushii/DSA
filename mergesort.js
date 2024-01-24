arr1 = [1,3,4]; 
arr2 = [6,2,7,5];
let finalarr = [];

for (let  i=0; i<arr1.length; i++){
    finalarr[i] = arr1[i];
}

for (j=0; j<arr1.length; j++){   
    finalarr[ j+ arr1.length] = arr2[j];
}
for(let k=0; k<finalarr.length; k++){
    for(let l=k +1; l<finalarr.length; l++){
        if(finalarr[k]> finalarr[l]){
            let temp = finalarr[k];
            finalarr[k] = finalarr[l];
            finalarr[l] = temp;
        }
    }
}

console.log(finalarr)



