
var num1=10
var result = num1 + ++num1 + ++num1 + num1++ + ++num1 + num1
console.log("Result: ", result)

var num1=10
var result = num1 - num1++ + --num1 + num1++ +num1--
console.log("Result: ", result)

var num1=10
var result = num1 + ++num1 + num1++ + --num1 - num1-- - --num1
console.log("Result: ", result)

var num1= 12
var result = num1++ - --num1 + num1 + ++num1 + num1-- - --num1
console.log("Result: ", result)