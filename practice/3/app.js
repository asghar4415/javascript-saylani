var username= prompt("What is your name?", "Asghar Ali")    // prompt() is a function that asks the user for input
alert("Nice to meet you, " + username)
console.log("Username: " + username)

let age= prompt("What is your age?", "19")     // let is a keyword that declares a variable
alert("You are " + age + " years old.")
console.log("Age: " + age)

//the first value in prompt() is the message that is displayed to the user and the second value is the default value that is displayed in the input field also known as placeholder.

var num1= +prompt("enter num1: ")
var num2= +prompt("enter num2: ")
// +promt() converts the input value to a number.
var sum= num1 + num2
console.log("Sum: " + sum)



