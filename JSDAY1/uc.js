9.	/* Write JS code to create an array of 5 strings. Convert the last character of each string to uppercase and store the output in the same array. Print the final array.  */
arr = ['ali','sanath','suguru','fozail','tarun',];
function upperCase(arr1)
{
    for(let i=0;i<arr1.length;i++)
    {
        arr1[i]=arr1[i].slice(0,arr1[i].length-1) + arr1[i].slice(arr1[i].length-1).toUpperCase();
    }
    console.log(arr1);
} 
upperCase(arr);