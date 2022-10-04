//Write JS code to display all the prime numbers between 5 and 50. Log the output to the browser console. *
let number;
let divider;
for (number = 5; number <= 50; number++) {
    for (divider = 2; divider < number / 2; divider++) {
        if (number % 2 === 0 || number % 3 === 0) {
            break;
        }
        else {
            console.log("prime number is:" + number);
            break;
        }
    }
}


