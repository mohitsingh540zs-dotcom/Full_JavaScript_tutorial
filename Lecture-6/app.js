// // # Default parameters, rest parameter, spread parameter

// // * Default parameters

// // Parameters are defining factors, boundaries or variables that characterized a FileSystem, function , model , determines how it operates or behaves.

// // Whenever we call a parameterized fn we have to provide some inputs to that function so it can do its own work by taking those values as and input and gives some output.

// // if we don't give parameters to those fns obviously it will give us and error or false output.

// // so giving or not , we can set the deafult values as a fallback case if the parameters is'nt given to the function.

// // Example:-

// // function sum (a = 5, b = 7) {
// //     return a + b;
// // }

// // console.log(sum(5)); // 5 + undefined;= NaN
// // console.log(sum(10,10));


// // * Spread parameter
// // Spread parameters are very useful it converts the array into individual numbers.

// // const arr = [1, 2, 3, 4, 5, 6];

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // let obj = {...arr};
// // console.log(obj);

// // * Rest parameters
// // Rest parameters are totally opposite of spread it converts the numbers into the list / Array.

// // function sum (...args){
// //     console.log(args);
// //     let sum = 0;

// //     for(let num of args){
// //         sum+=num;
// //     }
// //     return sum;
// // }

// // console.log(sum(1,2,3,4,5,6,7,8,9,10));


// // # Arrow Functions (glimpse)
// // Arrow is a shorthand form of traditional function

// // Traditional Function

// // function functionName () {
// //     // block scope
// //     // piece of code
// //     // return
// // }

// // Arrow function
// // syntax -> variable = (input) => (arrow) {piece of code}
// // const sum = (a,b) => a + b;

// // console.log(sum(10,10));

// // # function Execution 
// // function execution:- as we know when the code starts to execute it creates execution context with 2 phases one is MAP(Memory allocation phase) other is CEP(Code execution phase).

// // for functions :- whole function body is allocated in memory as it is thats why we can do funciton hoisting./

// // for its execution :- functions creates another execution context also known as local execution context.

// // example:-
// var ab = 70;
// var a = 40;
// console.log(a);
// b();
// c();

// function b(){
//     var a = 10;
//     console.log(a);
// }

// function c(){
//     var ab = 20;
//     console.log(ab);
// }
// console.log(ab);

// in stack after gep the fn b goes then fn c goes after all fns end the global one terminates from stack.