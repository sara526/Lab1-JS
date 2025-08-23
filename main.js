/* 1. //Number()
var num = prompt("enter a number:");

alert("you entered:" + num); // concatenate

*/

/*2.
var num = Number(prompt("Enter a number:"));

if (num % 3 === 0 && num % 4 === 0) {
    console.log("yes");
} else {
    console.log("No");
}

*/

/* 3.
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));

if (num1 > num2) {
    console.log("Max number is = " + num1);
} 
    else if (num2 > num1) {
    console.log("Max number is = " + num2);
} 
    else {
    console.log("Both numbers are Equal");
}

*/ 



/*  4.
    var number = (prompt("Enter a number:"));
    if (number < 0) { 
        alert("Negative");
    }
    else if (number >= 0){
        alert("Positive");
    }
    else{
        alert("Invalid input! Please enter a number");
    }
*/     


/* 5. هل ينفع استخدم for loop?

var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var num3 = Number(prompt("Enter third number:"));

var maxNum, minNum;

if (num1 >= num2 && num1 >= num3) {
    maxNum = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maxNum = num2;
} else {
    maxNum = num3;
}


if (num1 <= num2 && num1 <= num3) {
    minNum = num1;
} else if (num2 <= num1 && num2 <= num3) {
    minNum = num2;
} else {
    minNum = num3;
}

console.log("Max number =", maxNum);
console.log("Min number =", minNum);

*/

/* 6.
 var num = Number(prompt("Enter an integer:"));
 if (num % 2 == 0) {
    console.log("Even number");
} 
 else {
    console.log("Odd number");
}
 
*/

/*8.
var character = prompt("Enter a character:");

character = character.toLowerCase();

if (character === "a" || character === "e" || character === "o" || character === "i" || character === "u"){
    alert("vowel character");
} else {
    alert("consonant");
}

*/

/* 9.
let num = Number(prompt("Enter a number:"));

for (let i = 1; i <= num; i++) {
    console.log(i);
}
*/

/*10.

var num = Number(prompt("Enter a number:"));

for (let i = 0; i <= 12; i++) {
    console.log(num * i);
}

*/

    