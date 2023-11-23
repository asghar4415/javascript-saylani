//objects:
// objects in js are variables that can contain many values
// objects are written with curly braces
// objects are written as name:value pairs, separated by commas
// object properties are written as name:value pairs, separated by commas
// object methods are actions that can be performed on objects
// methods are stored in properties as function definitions
// this keyword refers to the current object
// access the object method with objectName.methodName()
// you can access object properties in two ways
// objectName.propertyName
// objectName["propertyName"]
// you can access object methods in two ways
// objectName.methodName()
// objectName["methodName"]()



var person={
    name:"John",
    age:30,
    city:"New York",
    greet:function()
    {
        return "Hello";
    },
    courses: ["HTML","CSS","JS"],
    marks:
    {
        maths:100,
        science:90
    }

};
console.log(person.name);    //dot notation
console.log(person["name"]);   //array notation
console.log(person.greet());
console.log(person.courses[0]);
console.log(person.marks.maths);

console.log(person);

