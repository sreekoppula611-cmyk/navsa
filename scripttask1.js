//javascript
// ==========================================
// JAVASCRIPT TASKS
// ==========================================


// TASK 1 - var, let, const

var studentName = "Mamatha";
let studentAge = 22;
const collegeName = "ABC College";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

studentName = "Mamatha Kappala";
studentAge = 23;

console.log(studentName);
console.log(studentAge);

var studentName = "Mamatha K";
console.log(studentName);

// const collegeName = "XYZ College"; // Error
// let studentAge = 24; // Error



// TASK 2 - User Information

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);



// TASK 3 - Welcome Message

let userName = prompt("Enter your name:");

alert("Welcome " + userName + "!");



// TASK 4 - Age Calculator

let birthYear = prompt("Enter your birth year:");

let currentYear = 2026;

let calculatedAge = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", calculatedAge);



// TASK 5 - Identify Data Types

let value1 = "Hello";
let value2 = 100;
let value3 = 25.5;
let value4 = true;
let value5 = false;
let value6 = undefined;
let value7 = null;

console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);
console.log(typeof value4);
console.log(typeof value5);
console.log(typeof value6);
console.log(typeof value7);



// TASK 6 - Student Data

let student = {
    name: "Mamatha",
    age: 22,
    city: "Vijayawada",
    qualification: "Graduate",
    isStudent: true
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);



// TASK 7 - Fruit Array

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Last Fruit:", fruits[fruits.length - 1]);
console.log("Total Fruits:", fruits.length);



// TASK 8 - Basic Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);



// TASK 9 - Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let totalPrice = shirt + pant + shoes;

console.log("Total:", totalPrice);



// TASK 10 - Marks Calculation

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);



// TASK 11 - Post Increment

let postA = 10;
let postB = postA++;

console.log(postA);
console.log(postB);

// Output:
// 11
// 10



// TASK 12 - Pre Increment

let preA = 10;
let preB = ++preA;

console.log(preA);
console.log(preB);

// Output:
// 11
// 11



// TASK 13 - Post Decrement

let postD = 20;
let postE = postD--;

console.log(postD);
console.log(postE);

// Output:
// 19
// 20



// TASK 14 - Pre Decrement

let preD = 20;
let preE = --preD;

console.log(preD);
console.log(preE);

// Output:
// 19
// 19



// TASK 15 - Final Values

let challengeA = 5;

let challengeB = challengeA++;

let challengeC = ++challengeA;

let challengeD = challengeB--;

console.log(challengeA);
console.log(challengeB);
console.log(challengeC);
console.log(challengeD);

// Output:
// 7
// 4
// 7
// 5



// TASK 16 - Assignment Operators

let num1 = 10;
num1 += 5;
console.log("+= :", num1);

let num2 = 10;
num2 -= 5;
console.log("-= :", num2);

let num3 = 10;
num3 *= 5;
console.log("*= :", num3);

let num4 = 10;
num4 /= 5;
console.log("/= :", num4);

let num5 = 10;
num5 %= 3;
console.log("%= :", num5);

let num6 = 10;
num6 **= 2;
console.log("**= :", num6);



// TASK 17 - Mini Student Profile

let profileName = "navya sree";
let profileAge = 22;
let profileCity = "hyderabad";
let profileCollege = "vits College";

let subjects = [
    "HTML",
    "CSS",
    "JavaScript",
    "English",
    "Maths"
];

let studentProfile = {
    name: profileName,
    age: profileAge,
    city: profileCity,
    college: profileCollege,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name:", studentProfile.name);
console.log("Student Age:", studentProfile.age);
console.log("City:", studentProfile.city);
console.log("First Subject:", subjects[0]);
console.log("Last Subject:", subjects[subjects.length - 1]);
console.log("Total Subjects:", subjects.length);
console.log("Complete Object:", studentProfile);



// TASK 18 - Final Challenge

let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Modulus:", firstNumber % secondNumber);
console.log("Power:", firstNumber ** secondNumber);