// Javascript is scripting or prototypal language which is used to make dynamic and interactive web applications.

// Js is weekly,interpreted,single threaded,synchronous language

// Variables
// var Name = "Mohit";  // Global Scope
// console.log(Name);

// Identifier must be unique within the scope

// Limitations
// // Can't use the same identifier again in case of let and const within a scope
// let Name = "Rishi"; // Script Scope
// console.log(Name);
// // Re-assigning
// Name = "Mohit";
// console.log(Name);
// let name;

// Const
// const fun;

// const Name = "mohit";
// console.log(Name);
// Name = "Rishi";
// console.log(Name);

// --------------------------------------------
// Hoisting : Accessing the variable before of its existence or we can say it's initialization

// Normal way of accessing varibales
// let Name = "Mohit";
// console.log(Name);

// Hoisting way
// console.log(Mohit);
// let Mohit = 5;
// it will throw a reference error , why? because of memory alocation to value unavailable

// // Var case
// console.log(Name); //undefined because of memory allocation
// var Name = "Mohit";

// // Const case
// console.log(Name); // value unavailable memory alocation reference error can't access before
// const Name = "Rishi";

// ----------------------------
// Data types---
// Two types of data types
// *Primitive data types -> Immutable/Non-changeable
// *Non-Primitive data type -> changeable why?? bcoz of reference

// Primitive types

// (Function to show types of variables)
// function showType(val){
//     console.log(typeof val);
// }

// let N0 = 2; //Number
// let Name = "Mohit"; //String
// let isFalse = false; //Boolean
// let symbol = Symbol(2); //Symbol
// let otp = null; //Null
// let fun = undefined; //undefined
// let alsoHuge = BigInt(9007199254740991);

// *Non-primitive -> object,arrays,functions,date,class

// object

// let obj1 = { // value as obj
//     a:10 //properties
// }

// let obj2 = {

// }

// obj1 = obj2 // refrence changed

// console.log(obj1.a); //left.right--> left--->reference, right--->properties,methods

// console.log(obj2.a);

// Arrays

// function fn() {
//     return "Mohit"
// }
// let arr = [2, 2, 2, "Rohit", 2, 2, fn()];

// console.log(arr)

// addresses
// Arrays in js are hetrogeniuos-> number,string,fns

// let array = ["one",2,"three",4];
// console.log(array);
// console.table(array);

// Function
// Function is a piece of code which will execute only when it's called.

// function fun() {
//     let Name = "Mohit";
//     console.log(Name);
//     return 9;
// } // functional scope

// // fun(); // this is fn call;

// // refrencing
// // whenever we store a function name in a variable it stores the reference if that function on the other hand when we store the function call in the variable it stores the returned value in it.

// // refrencing
// let result = fun;
// console.log(result); //-->function:fun
// result(); //Mohit

// // Call and returned value storing
// let res = fun();
// console.log(res); // 9

// -----------------------------------
// Javascript operators