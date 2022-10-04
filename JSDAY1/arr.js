/*	Write JS code to create an array of 10 numbers. Find the first two maximum numbers in the array  */
let firstmaxinum = 0, secondmaxinum = 0;
let arr=[2,6,2,3,8,5,5,6,7,6,9];

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > firstmaxinum) {
        secondmaxinum = firstmaxinum;
        firstmaxinum = arr[i];
    }
    else if (arr[i] > secondmaxinum && arr[i] != firstmaxinum) {
        secondmaxinum = arr[i];
    }
}
console.log(firstmaxinum);
console.log(secondmaxinum);