// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// console.log(typeof(person));
// console.log(person);
// console.log(person.firstName);
// person.firstName = "abhishek";
// console.log(person.firstName);
// console.log(person["firstName"]);
// const arr = [];
// console.log(typeof(arr));


//this keyword (this keyword refers the current context)

// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

//constructor person

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Merry", "Doe", 45, "blue");

console.log(myFather);
console.log(myMother);
