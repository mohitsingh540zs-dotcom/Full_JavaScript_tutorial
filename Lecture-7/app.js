// // Scope

// // Scope means which parts are accessable within a code.

// // # Global Scope
// // Values created here are accessable from anywhere in our script.

// // # Function Scope
// // // Values declared inside a function are local for that function.
// // function hlo() {
// //     let a = 10;
// //     console.log(a)
// // }
// // hlo();
// // console.log(a) // a is not defined

// // # Block Scope
// // A block is anything which is wrapped within the curly braces { }
// // {
// //     let a = 30;
// //     console.log(a);
// // }
// // var a = 10;

// // {
// //     var a = 40;
// // }

// // console.log(a)
// // # lexical Scope
// // Meaning having a environment where children function have access to their parent functions variables.
// function outer(){
//     let counter = 0;
//     return function inner(){
//         counter ++;
//         console.log(counter);
//     }
// }
// const ans = outer();
// ans();
// ans();
// ans();
// ans();
// ans();
// # Scope Chaining
// if js can't able to find a varible in the current scope , it opens the door to the outer scope and looks there , it keep moving outwards until it finds the varibale or hits the global execution context and realise that there is no variable exist here

// working way
// ->Level 1 (Local)
// ->Level 2 (Outer/Parent scope)
// ->Level 3 (Global execution)

// chaining is only possible from Children to Parent because of lexical environment.

// function parent() {
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     console.log(a,b,c);

//     return function child() {
//         let d = 50;
//         a = 30;
//         b = 10;
//         c = 20;
//         console.log(a, b, c);
//     }
// }
// const instance = parent();
// instance();
// instance();
// instance();
// instance();