//round off and floor functions

var num = 3.45214;
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);

document.write("Number: " + num + "<br>");
document.write("Round off value: " + round + "<br>");
document.write("Floor value: " + floor + "<br>");
document.write("Ceil value: " + ceil + "<br>");

// random number generating

var random= Math.random();
document.write("<br>" + "Random dice value: " + random + "<br>");

//limit random number

var random1 = Math.random() * 6;
document.write("<br>" + "Random dice value: " + random1 + "<br>");

//random number between 1 and 100

var random2 = Math.random() * 100;
document.write("<br>" + "Random number between 1 and 100: " + random2 + "<br>");

//random number between 1 and 10

var random3 = Math.random() * 10 ;
var random3floor = Math.floor(random3);
document.write("<br>" + "Random number between 1 and 10: " + random3 + "<br>");
document.write("<br>" + "Random number between 1 and 10((floored): " + random3floor + "<br>");


