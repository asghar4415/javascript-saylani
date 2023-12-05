
//Array of objects

// var std1= {
//     id: 1,
//     name: "John",
//     age: 20
// };

// var std2= {
//     id: 2,
//     name: "Smith",
//     age: 22
// };

// var stdarr = [std1, std2];

// console.log(stdarr);

      // OR

var stdarr = [
    {
        id: 1,
        name: "John",
        age: 20
    },
    {
        id: 2,
        name: "Smith",
        age: 22
    }
    ,
    {
        id: 3,
        name: "Ali",
        age: 26
    }
    ,
    {
        id: 4,
        name: "Khan",
        age: 28
    }
    ,
    {
        id: 5,
        name: "Ahmed",
        age: 30
    }
]

var usertable= document.getElementById("usertable");

for(var i=0; i<stdarr.length; i++){

    var id = stdarr[i].id;
    var name = stdarr[i].name;
    var age = stdarr[i].age;

var rowHTML = "<tr><td>"+id+"</td><td>"+name+"</td><td>"+age+"</td></tr>";
usertable.innerHTML += rowHTML;

}
//no matter how many objects are in array, it will print all of them in table format




