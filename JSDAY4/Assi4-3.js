//3) Refactor the JS function created in assignment 2 so that the user can pass the filter condition also to the function. For example, only even numbers, only prime numbers, etc. The condition must NOT be passed as a string

let array=[96,5,66,52,63,36,21,59,4,7];
let displayOddNumbers=array.filter(n=>n%2!==0)
console.log(displayOddNumbers);

let displayEvenNumbers=array.filter(n=>n%2===0)
console.log(displayEvenNumbers);

function filterFunction(array,func){
    resultArray=[];
    for(let i=0;i<array.length;i++){
        if(func(array[i])){
            resultArray.push(array[i]);
        }
    }
    console.log(resultArray);
}

console.log('prime number in the input array are:');
filterFunction(array,x=>{
    if(x<=1){
        return false
    }
    for(let i=2;i<x;i++){
        if(x%i==0){
            return false
        }
    }
    return true
})