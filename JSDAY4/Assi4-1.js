//1) Run the following code & examine the output carefully: 
 
// for(var i=1 ; i<10 ; i++) 
// { 
//     setTimeout(() => { 
//         console.log(i); 
//     }, 1000) 
// } 
 
//Refactor the code to produce the following output after 1 second: 
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7 
// 8 
// 9 
// 10 

for(var i=1;i<=10;i++)
{
    setTimeout(()=>{
        console.log(i);
    },i*1000)
    console.log(i);
}
