// converting strings to integers 

// var a = "42";
// var b = "42px";
// var c = 42;

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))

var a= "42";
var b = "12";

var sum= +a + +b;
// the + sign converts the string to an integer
console.log(sum)

var num1= "500";
console.log(typeof(Number(num1)))
// Number() converts the string to an integer

var num2= "500";
var num3= parseInt(num2);
console.log(typeof(num3))
console.log(num3)
// parseInt() converts the string to an integer

var num4= "500";
var num5= parseFloat(num4);
console.log(typeof(num5))
console.log(num5)
// parseFloat() converts the string to a float

