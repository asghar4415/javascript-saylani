// There is a difference between undefined and NaN (Not a Number).
// undefined means a variable has been declared but has not yet been assigned a value.
// On the other hand, NaN means not a number.
// When you perform a mathematical operation involving a NaN value, the result will also be NaN. 
// To illustrate this, take a look at the following example:

var a;
console.log(a + 2); // prints NaN

// In the code above, we declared the variable a but we haven't assigned any value yet.
// When we log the value of a + 2 we get NaN (Not a Number).
// If you check the type of NaN with the typeof operator, it returns a number.
// This is very confusing.
// Therefore, we can use the isNaN() function to check if the value is NaN or not.
// This function returns true if the value is NaN, and false if not.
// You can use this function to check if a value is a number or not.
// See the following example:

var a;
console.log(isNaN(a)); // prints true

// In the code above, we check if the value of a is NaN or not.
// Since a is undefined, we get true.
// Now, let's assign a value to a and check again:

var a = 2;
console.log(isNaN(a)); // prints false

// In the code above, we assigned a value of 2 to a.

// Now, when we check if a is NaN or not, we get false.
// This is because a is a number and not NaN.
// You can also check if a value is a number or not using the typeof operator.
// See the following example:

var a = 2;
console.log(typeof a); // prints number

// In the code above, we check the type of a using the typeof operator.
// Since a is a number, we get number as the output.
// Now, let's assign a string value to a and check again:

var a = "Hello";
console.log(typeof a); // prints string

// In the code above, we assigned a string value to a.
// When we check the type of a, we get string as the output.
// Now, let's check if a is NaN or not:

var a = "Hello";
console.log(isNaN(a)); // prints true

// In the code above, we check if a is NaN or not.
// Since a is a string, we get true.
// Now, let's assign a number to a and check again:

var a = 2;
console.log(isNaN(a)); // prints false

// In the code above, we assigned a number to a.
// When we check if a is NaN or not, we get false.
// This is because a is a number and not NaN.

