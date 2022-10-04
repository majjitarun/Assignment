// Write JS code to reverse a string. Store the string in a variable. 
function reverse_string(str){

    let newstring="";
    for(let i=str.length-1;i>=0; i--){
        newstring+= str[i];
    }
    return newstring;
}
var string="esreveR"
const result= reverse_string(string);
console.log(result);