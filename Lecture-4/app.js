// // // JavaScript Functions
// // // Parameterized fns
// // function sum(a, b) {
// //     return a + b
// // }

// // console.log(sum(3, 3));
// // console.log(sum(30, 30));
// // console.log(sum(3, 30));

// // // Non parameterized fns
// // function greet() {
// //     return `Hello mohit`
// // }

// // let ans = greet();
// // console.log(ans)

// // Syntax

// // function fnName (parameters) // block{

// //     // piece of code 

// //     // returning value
// // }

// // parameters vs arguments
// // parameters are those values which function takes them as input.
// // arguments are those values which are passed to the functions.

// // function Rev(arr) {
// //     let newArr = [];
// //     for (let i = arr.length-1; i >= 0; i--) {
// //         newArr.push(arr[i])
// //     }
// //     return newArr
// // }

// // const res = Rev([1, 2, 3]);
// // console.log(res)

// function Calculator(a, b, choice) {

//     switch (choice) {
//         case '+': {
//             return a + b;
//         }
//         case '-': {
//             return a - b;
//         }
//         case '*': {
//             return a * b;
//         }
//         case '/': {
//             return a / b;
//         }
//         default: {
//             console.log("Error Occured, try with genuine choice");
//             break;
//         }
//     }
// }
// console.log(Calculator(5,6,"/"))

// console.log(a);

// var a = 10;
// console.log(a);

// // console.log(arr);
// // var arr = [12,13,14];
// // console.log(arr);

// console.log(arr)
// let arr = [1,2,3];

// arr = VU

// Execution Context
// everything which is executed by javascript in an environment is known as execution context

// GCP (Global execution phase)
// goes inside the callstack and creates 2 phases

// it contains two phases
// 1- Memory Allocation phase
// 2- Code Execution Phase

// alloting space in memory done by memory allocation phase
// then executes code line by line by code execution phase


// for function call a new execution phase starts with memory allocation and code exection for that func


// variables by var assigned to undefined in Map
// variables by let and const assigned to value unavailable in CEP
// functions stores as it is in memory


// greet(); Hoisting of functions are possible 


// function greet(){

//     console.log("hello")
// }

// var a = 10;
// console.log(a);


