const factorial=(num)=>{
    fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    return fact;
}
console.log(`factorial of number: ${factorial(4)}`);