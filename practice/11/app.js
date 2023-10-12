//date and time in javascript

// var date = new Date();
// console.log(date);

// console.log("data: " + date.getDate());
// console.log("month: " + date.getMonth());
// console.log("year: " + date.getFullYear());

// console.log("hours: " + date.getHours());
// console.log("minutes: " + date.getMinutes());
// console.log("seconds: " + date.getSeconds());

// var fulldate= date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
// console.log(fulldate);

// var fulltime= date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// console.log(fulltime);

// var dayname= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const day= new Date().getDay();
// console.log(dayname[day]);

// var time= new Date().getTime();
// console.log(time);
// it is in miliseconds


//calculating age from date of birth 
var now = new Date().getTime();
console.log("now: ", now);
var userDOB= new Date("1998-12-12");
var dob= userDOB.getTime();
console.log("dob: ", dob);

var diff= now-dob;
console.log("diff: ", diff);

var age= diff/(1000*60*60*24*30*12);
console.log("age: ", age);
console.log("age: ", Math.floor(age));

