// // Javascript operators

// // Operators in javascript are symbols which is used to perform some tasks we have 6 types of operators in javascript
// // -------------------
// // 1.Arithmetic operators  4.Conditional operators
// // 2.Logical operators     5.Assignment operators
// // 3.Comparison operators  6.Type operator

// // #1 Arithmetic operators
// // +(Addition),-(substraction),/(division),*(multiplication),%(modulous),**(power)
// // These are the mathematical symbols which are used to perform mathematical task.

// // // increment, pre-increment, post-increment

// // let a = 5;
// // a++; //---->a = a + 1; -->post-increment
// // ++a //--> pre-increament
// // console.log(a);

// // decrement, pre-decrement, post-decrement
// // let b = 6;
// // b--; //---->b = b - 1; ---> post-decrement
// // --b; // pre-decrement
// // console.log(b);

// // #2 Assignment Operator
// // These operators are used to assign some value to the variable.
// // x = 10; //---> '='

// // #3 Comparison operator
// // Comparing 2 or more values
// // gt,lt,eqt,not-eqt,gt-eqt, lt-eqt

// // let age = 18;

// // is age > 18 ?? //---->False
// // is age <18 ??  //---->False
// // is age is == 18 ?? //----->true

// // equal to operator && strict equal to operator

// // console.log(5==5); // true
// // console.log(5=='5'); // true
// // console.log(5===5); // true
// // console.log(5==='5'); //false

// // --------------------
// // #4 Logical Operators

// // Logical operator are used to combine or invert expression (True/False) for decision making.
// // Three types of primary logical operators are ----> AND(&&), OR(||), Not(!)
// // And operator (&&) -----> if one is false then false otherwise true.
// // OR operator (||)-----> if one true then final ans is true otherwise it's false.
// // NOT operator(!)-----> it negates the value if final ans is true then the ans become false vice-versaa.

// let score = 0;

// console.log(5 && 5); // true
// console.log(5 || 5 || 6); // true
// console.log(!score); // 1
// console.log(true && true && true && false);
// console.log(true || true || true || true || false);
// console.log(0 || 5 || 6) 

// # 5 Type of operator

// operator which is used to find the type of variables.
// typeof(); //-----> syntax
// let x = 10;
// let y = 'mohit';
// let z = "5"
// console.log(typeof(x),typeof(y),typeof(z));

// # 6 Conditional operator / ternary operator
// This operator is used to check some specific condition on the basis of those conditions the final output is determined.

// let age = 18;
// console.log(age >= 18 ? true : false);

// condition ? true : false