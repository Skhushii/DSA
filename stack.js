let stack = [];
let size = 5;

function print (stack){
if (stack.length===0){
    console.log("stack is underflow");
}
else{
    console.log(stack);
}
}

function add(stack,element){
    if(stack.length>4){
        console.log("stack is overflow");
    }
    else{
        stack.push(element)
    }
}

function remove(stack){
    if(stack.length===0){
        console.log("stack is empty");
    }
    else{
        stack.pop()
    }
}

add(stack,6);
add(stack,7);
add(stack,9)
// remove(stack,1)
print(stack);


