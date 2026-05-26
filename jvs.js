// // Excercise 1 Number 
// let num1 = int("10");
// let num2 = float("2.1");
// let sum = num1 + num2;
// let difference = num1 - num2;
// let product = num1 * num2;
// let quotient = num1 / num2;
// let remainder = num1 % num2;
// let exponentiation = num1 ** num2;

// console.log(`Sum: ${sum}`);
// console.log(`Difference: ${difference}`);
// console.log(`Product: ${product}`);
// console.log(`Quotient: ${quotient}`);
// console.log(`Remainder: ${remainder}`);
// console.log(`Exponentiation: ${exponentiation}`);

// console.log("num1=", num1);
// console.log("num2=", num2);

// // Excercise 2 boolean and opertators
// let x = 8;
// let y = 12;
// console.log("x > y:", x > y);
// console.log("x < y:", x < y);
// console.log("x === y:", x === y);
// console.log("x !== y:", x !== y);

// //declearing variable a and be to true and false
// let a = true;
// let b = false;
// console.log("a && b:", a && b); 
// console.log("a || b:", a || b);
// console.log("!a:", !a);

// // assignment operators
// let p = 10;
// p += 5;
// console.log("p after += 5:", p);
// p -= 3;
// console.log("p after -= 3:", p);
// p *= 2;
// console.log("p after *= 2:", p);
// p /= 4;
// console.log("p after /= 4:", p);
// p %= 3;
// console.log("p after %= 3:", p);


// // condotional statements & loops
// let temperature = 25;
// if (temperature === 0) {
//     console.log("It's hot Freezing!");
// } 
// else if (temperature < 0 && temperature > 15) {
//     console.log("It's cold outside.");
// }
//  else if (temperature >= 15 && temperature <= 25) {
//     console.log("The weather is mild.");
// }
// else if (temperature > 25) {
//     console.log("It's warm outside.");

// }
// else {
//     console.log("Invalid temperature value.");
// }

// Divislbility check
let num = 12;
if( num % 2== 0 && num %3 == 0){
    console.log(num + " is divisible by both 2 and 3.");
}
else if (num % 2 == 0) {
    console.log(num + " is divisible by 2.");
}
else if (num % 3 == 0) {
    console.log(num + " is divisible by 3.");
}
else {
    console.log(num + " is not divisible by either 2 or 3.");
}

