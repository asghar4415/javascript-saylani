// async function getdata() {
//     const data = await fetch('https://fakestoreapi.com/products/')
//         .then(res =>
//             res.json()

//              )

//              console.log(data)

// }
// asyn function made the function as a promise and await will wait for the promise to be resolved and then it will execute the next line of code


// async with try and catch for error handling

// async function getdata() {
//     try {
//         const data = await fetch('https://fakestoreapi.com/products/')
//             .then(res =>
//                 res.json()

//             )

//         console.log(data)
//     }
//     catch (error) {
//         console.log(error)
//     }

// }
// will prevent application from crashing and will show the error in console

//Classes:
class std 
{
    
    constructor(n, a)
    {
        this.name = n;
        this.age = a;
    }
    getname()
    {
        return this.name;
    }
    getage()
    {
        return this.age;
    }
    setname(name)
    {
        this.name = name;
    }
    setage(age)
    {
        this.age = age;
    }
}
let student1 = new std("Ali", 20);

console.log(student1.getname());
console.log(student1.getage());
student1.setname("Ahmed");
student1.setage(21);
console.log(student1.getname());
console.log(student1.getage());