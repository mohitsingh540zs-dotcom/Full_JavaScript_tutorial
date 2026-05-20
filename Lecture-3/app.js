// JavaScript Loops and  Conditinal Statements

// # Conditinal Statements

// ## if and else

//  if statement is true then the if block will execute and other will skipped otherwise else block will run

// let age = 18;

// if (age >= 18) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// ---------------------------------------------------

// let marks = 50;
// ## if else if Ladder

// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 80 && marks < 90) {
//     console.log("Grade B");
// } else if (marks >= 70 && marks < 80) {
//     console.log("Grade C")
// } else {
//     console.log("Grade D")
// }

// let Name = "Mohit";

// if (Name === "rakesh") {
//     console.log("My name is Rakesh")
// } else {
//     console.log("My name is Mohit");
// }

// ---------------------------------------------------
// # Switch Statement

// Switch is a statement which is a control flow mechanism that evaluates an expression and executes the block of code based on which value is satisfies or matches.
// let day = 0;

// switch (day) {
//     case 0: {
//         console.log("Sunday");
//         break;
//     }
//     case 1: {
//         console.log("Monday");
//         break;
//     }
//     case 2: {
//         console.log("Tuesday");
//         break
//     }
//     case 3: {
//         console.log("Wednesday");
//         break;
//     }
// }
// ----------------------------------------------------
// let button = "ac";

// switch (button) {
//     case "bulb": {
//         console.log("Bulb jal gyi");
//         break;
//     }
//     case "fan": {
//         console.log("Pankha chalu krdia hai");
//         break;
//     }
//     case "ac": {
//         console.log("AC Chalra hai");
//         break;
//     }
//     case "cooler": {
//         console.log("Cooler chalu hogya");
//         break;
//     }
// }

// ---------------------------------------------------
// ## Javascript Loops
// Doing task multiple times is called looping
// In javascript we have 5 types of loops
// *1- For loop
// *2- While loop
// *3- Do-While loop
// *4- For-In loop
// *5- For-Of loop

// For-loop Syntax-> for(initialisation,condition,updation)

// for (let i=0;i<3;i++){
//     console.log(i);
// }
// //0 1 2
// ---------------------------------------

//While loop

// initialistion

// while(condition){
//     updation
// }

// let i=0;

// while(i<10){
//     console.log(i);
//     i++;
// }

// let i =0;
// while(i<10){
//     if(i%2==0){
//         console.log(i+1);
//     }
//     i++;
// }
// ----------------------------------
// Do-While loop

// let i = 10000;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// For-In --> iterate through keys

// This is introduced in JavaScript's Es-6 ver which used to iterate over enumerable properties (keys) of an object.

// const obj = {
//     1:"one",
//     2:"two",
//     3:"three",
//     4:"four"
// }

// for(let key in obj){
//     console.log(key);
// }
// const arr = [1,2,3,4,5];

// for(let idx in arr){
//     console.log(idx)
// }
// console.table(arr)

// For-Of --> iterate through values

// const arr = [1,2,3,4,5];

// for (const val of arr) {
//     console.log(val+5)
// }

// const obj = {
//     1:"one",
//     2:"two"
// }

// for (const val of Object.keys(obj)) {
//     console.log(val)
// }

// # Question 1 -> sum and avg of an array
// [1,2,3,4,5] sum = 15 avg = 3
// const arr = [1, 2, 3, 4, 5];

// let store = 0;
// // by using for loop
// for (let i = 0; i < arr.length; i++) {
//     store += arr[i];
// }

// console.log(store);
// console.log(store/arr.length)

const arr = [6, 7, 8, 9, 10];

// by using for loop
// for (let i = 0; i < 5; i++) {
//     console.log(arr[i])
// }

// while loop
// let i = 0;
// while(i<5){
//     console.log(arr[i]);
//     i++;
// }

// do while
// let i = 0;
// do{
//     console.log(arr[i]);
//     i++
// } while(i<5);

// for of

// for (const val of arr) {
//     console.log(val)
// }
// for in

// for (const key in arr) {
//     const element = arr[key];
//     console.log(element)
// }
