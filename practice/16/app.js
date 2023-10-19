// local scope and global scope

// var a = 1;  // global scope

// function one() {
//     var b = 2;  // local scope
//     console.log(a);
//     console.log(b);
// }

// one();
// console.log(a); 
// console.log(b);  // error

// Note that the variable a is accessible inside the function one() and outside the function one().
// But the variable b is accessible only inside the function one().
// The variable a is a global variable and the variable b is a local variable.

// var fullname= "John Doe";

// function name1()
// {
//     var fullname= "John Smith";
//     console.log(fullname);
// }
// name1()  // John Smith
// console.log(fullname);  // John Doe

// but if 

// var fullname= "John Doe";

// function name1()
// {
//     fullname= "John Smith";
//     console.log(fullname);
// }
// name1()  // John Smith
// console.log(fullname);  // John Smith

// Note that the variable fullname is a global variable. 
// But inside the function name(), the variable fullname is a local variable.
// So, the value of the variable fullname is not changed inside the function name().
// So, the output is John Smith and John Doe.

// If you don't use the var keyword, the variable is automatically declared as a global variable.
// So, the variable fullname is a global variable.
// So, the value of the variable fullname is changed inside the function name().
// So, the output is John Smith and John Smith.


