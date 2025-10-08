const num1 = 5; 
const num2 = 10;
const num3 = 15;

// if (num1 > num2 && num1 > num3) {
//     console.log(num1, "num1 is greatest");
// }   
// else if (num2 > num3) {
//     console.log(num2, "num2 is greatest");
// }   
// else {
//     console.log(num3, "num3 is greatest");
// }


const max = (num1 > num2 && num1 > num3) ? console.log(num1, "num1 is greatest") : (num2 > num3) ? console.log(num2, "num2 is greatest") : console.log(num3, "num3 is greatest") ;