// objects methods

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    credentials: function () {
        console.log(this.firstName + " " + this.lastName);
        console.log("ID: " + this.id);
    }
};

person.credentials();

