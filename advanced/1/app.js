//Advanced JS

let myname= "John";
console.log(myname);
//let variable is block scoped and can be changed later on.

const myname2= "John";
console.log(myname2);
//const variable is block scoped and cannot be changed later on.

//difference between let and var is that var is function scoped and let is block scoped. 
//for example: if we use var in a for loop, it will be available outside the for loop as well.

//Hoisting:
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//Example 1:
//console.log(myname);
//let myname= "John";
//This will give an error because let variables are not hoisted.

//Example 2:
//console.log(myname);
//var myname= "John";
//This will give undefined because var variables are hoisted.

//Example 3:
