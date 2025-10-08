const num = 22;

if(num % 2 !== 0 && num > 0){
   console.log(num, "Odd & Positive number");
}
else if(num % 2 !== 0 && num <= 0){
   console.log(num, "Odd but Not Positive");
}
else{
   console.log(num, "Not an Odd number");
}
