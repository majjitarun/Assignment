// Write a standard JS function which takes a number as an argument and returns its factorial.

function factNum(n){
    
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}
console.log(`factorial of  given number:${factNum(5)}`);
