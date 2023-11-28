//constructors

var std=
{
    name: "Rahim",
    age: 12,
    cgpa: 3.5,
    lang: ["bangla", "english", "hindi"],
    print: function () {
        console.log(this.name, this.age)
    }
}

function Student(name, age, cgpa, lang) {
    this.name = name
    this.age = age
    this.cgpa = cgpa
    this.lang = lang
    this.print = function () {
        console.log(this.name, this.age)
    }
}

var std1 = new Student("Rahim", 12, 3.5, ["bangla", "english", "hindi"])
var std2 = new Student("Karim", 13, 3.7, ["bangla", "english", "hindi"])
var std3 = new Student("Jodu", 14, 3.9, ["bangla", "english", "hindi"])

console.log(std1)
console.log(std2)
console.log(std3)

