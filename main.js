// Assignment-1.js (Using If statement & Switch case)

// Q1: Write a program that allows user to enter number then print it
// const userNum = window.prompt("Enter number");
// window.alert(userNum);


// Q2: Write a program that takes number from user then print yes if divisible by 3 and 4, otherwise print no
// let userNum = Number(window.prompt("Enter Number"));
// if (userNum % 3 === 0 && userNum % 4 === 0) {
//   window.alert("Yes");
// } else {
//   window.alert("No");
// }

// Q3: Write a program that allows the user to insert 2 integers then print the max.
// const firstNum = Number(window.prompt("Enter first number"));
// const secondNum = Number(window.prompt("Enter second number"));
// if (firstNum > secondNum) {
//   window.alert(firstNum);
// } else {
//   window.alert(secondNum);
// }

// Q4: Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive
// const userNum = Number(window.prompt("Enter number"));
// if (userNum < 0) {
//   window.alert("Negative");
// } else {
//   window.alert("Positive");
// }

// Q5: Write a program that takes 3 integers from user then print the max element and the min element
// const firstNum = Number(window.prompt("Enter first number"));
// const secondNum = Number(window.prompt("Enter second number"));
// const thirdNum = Number(window.prompt("Enter third number"));

// if (firstNum > secondNum && firstNum > thirdNum) {
//   window.alert("Max Number is: " + firstNum);
// } else if (secondNum > firstNum && secondNum > thirdNum) {
//   window.alert("Max Number is: " + secondNum);
// } else {
//   window.alert("Max Number is: " + thirdNum);
// }

// if (firstNum < secondNum && firstNum < thirdNum) {
//   window.alert("Min Number is: " + firstNum);
// } else if (secondNum < firstNum && secondNum < thirdNum) {
//   window.alert("Min Number is: " + secondNum);
// } else {
//   window.alert("Min Number is: " + thirdNum);
// }


// Q6: Write a program that allows the user to insert integer number then check if number is even or odd
// const userNum = Number(window.prompt("Enter number"));
// if (userNum % 2 === 0) {
//   window.alert("Number " + userNum + " is Even");
// } else {
//   window.alert("Number " + userNum + " is Odd");
// }


// Q7: Write a program that takes a character from user then check if it is a vowel (a,e,i,o,u) or consonant
// const inputChar = window.prompt("Enter your character");
// switch (inputChar.toLowerCase()) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     window.alert("Vowel");
//     break;
//   default:
//     window.alert("Consonant");
// }

// Q8: Write a program that allows user to insert integer then print all numbers between 1 and that number
// const userNum = Number(window.prompt("Enter number"));
// for (let i = 1; i <= userNum; i++) {
//   window.alert(i);
// }

// Q9: Write a program that allows user to insert integer then print a multiplication table up to 12
// const userNum = Number(window.prompt("Enter number"));
// for (let i = 1; i <= 12; i++) {
//   window.alert(userNum + " x " + i + " = " + i * userNum);
// }

// Q10: Write a program that allows user to insert number then print all even numbers between 1 and that number
// const userNum = Number(window.prompt("Enter number"));
// for (let i = 2; i <= userNum; i += 2) {
//   window.alert(i);
// }

// Q11: Write a program that takes two integers then print the power (num^power)
// const baseNum = Number(window.prompt("Enter number"));
// const powerNum = Number(window.prompt("Enter power"));
// let result = 1;
// for (let i = 0; i < powerNum; i++) {
//   result *= baseNum;
// }
// window.alert(result);


// Q12: Write a program to enter marks of five subjects and calculate total, average and percentage
// let totalMarks = 0;
// for (let i = 0; i < 5; i++) {
//   totalMarks += Number(window.prompt("Enter mark for subject " + (i + 1)));
// }
// window.alert("Total marks = " + totalMarks);
// window.alert("Average = " + totalMarks / 5);
// window.alert("Percentage = " + (totalMarks / 500) * 100);


// Q13: Write a program to input month number and print number of days in that month
// const monthNum = Number(window.prompt("Enter month number"));
// if ([1, 3, 5, 7, 8, 10, 12].includes(monthNum)) {
//   window.alert("31 days");
// } else if (monthNum === 2) {
//   window.alert("28 days");
// } else if ([4, 6, 9, 11].includes(monthNum)) {
//   window.alert("30 days");
// }


// Q14: Write a program to input marks of Physics, Chemistry, Biology, Mathematics and Computer, then find percentage and grade.
// const physics = Number(window.prompt("Enter Physics mark"));
// const chemistry = Number(window.prompt("Enter Chemistry mark"));
// const math = Number(window.prompt("Enter Mathematics mark"));
// const biology = Number(window.prompt("Enter Biology mark"));
// const computer = Number(window.prompt("Enter Computer mark"));
// const percentage = ((physics + chemistry + biology + math + computer) / 500) * 100;

// if (percentage >= 90) {
//   window.alert("Grade A");
// } else if (percentage >= 80) {
//   window.alert("Grade B");
// } else if (percentage >= 70) {
//   window.alert("Grade C");
// } else if (percentage >= 60) {
//   window.alert("Grade D");
// } else if (percentage >= 40) {
//   window.alert("Grade E");
// } else {
//   window.alert("Grade F");
// }


// Q15: Write a program to print total number of days in a month (Using switch)
// const monthNum = window.prompt("Enter month number");
// switch (monthNum) {
//   case "1":
//   case "3":
//   case "5":
//   case "7":
//   case "8":
//   case "10":
//   case "12":
//    window.alert("31");
//     break;
//   case "2":
//     window.alert("28 days in a common year and 29 days in leap years");
//     break;
//   case "4":
//   case "6":
//   case "9":
//   case "11":
//    window.alert("30");
//     break;
// }


// Q16: Write a program to check whether an alphabet is vowel or consonant.

// const inputChar = window.prompt("Enter your character");
// if (["a", "e", "i", "o", "u"].includes(inputChar.toLowerCase())) {
//   window.alert("It is a vowel");
// } else {
//   window.alert("It is a consonant");
// }


// Q17: Write a program to find maximum between two numbers.
// const firstNum = Number(window.prompt("Enter first number"));
// const secondNum = Number(window.prompt("Enter second number"));
// switch (firstNum > secondNum) {
//   case true:
//     window.alert(firstNum);
//     break;
//   case false:
//     window.alert(secondNum);
//     break;
// }


// Q18: Write a program to check whether a number is even or odd .
// const userNum = Number(window.prompt("Enter number"));
// switch (userNum % 2 === 0) {
//   case true:
//     window.alert("Even number");
//     break;
//   case false:
//     window.alert("Odd number");
//     break;
// }


// Q19: Write a program to check whether a number is positive, negative or zero
// const userNum = Number(window.prompt("Enter number"));
// switch (true) {
//   case userNum > 0:
//     window.alert("Number is a Positive");
//     break;
//   case userNum === 0:
//     window.alert("Zero");
//     break;
//   default:
//     window.alert("Number is an Negative");
// }


// Q20: Write a program to create a Simple Calculator.

// const firstNum = Number(window.prompt("Enter first number"));
// const operator = window.prompt("Enter operator (+, -, *, /)");
// const secondNum = Number(window.prompt("Enter second number"));
// switch (operator) {
//   case "+":
//     window.alert(firstNum + secondNum);
//     break;
//   case "-":
//     window.alert(firstNum - secondNum);
//     break;
//   case "*":
//     window.alert(firstNum * secondNum);
//     break;
//   case "/":
//     window.alert(firstNum / secondNum);
//     break;
// }


    