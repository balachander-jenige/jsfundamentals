console.log("hello world")

//Variables
// var (globally scoped), let (you can reassign value), const
 let age = 25
age = 30
console.log(age)

const name = "John"
//name = "Doe" //this will throw an error because you cannot reassign a value to a const variable
console.log(name)

//Primitive data types
// string, number, boolean, null, undefined, symbol

const nam = "John";
const ag = 25;
const isStudent = true;
const hobbies = null;
const rating = 4.7;
const x = null; //null
let address; //undefined

console.log(nam, ag, isStudent, hobbies, rating, address, x)
console.log(typeof nam) //string
console.log(typeof ag) //number
console.log(typeof isStudent) //boolean
console.log(typeof hobbies) //object (this is a quirk in JavaScript, null is considered an object)
console.log(typeof rating) //number
console.log(typeof address) //undefined
console.log(typeof x) //object (this is a quirk in JavaScript, null is considered an object)


//concatenation
console.log("my name is " + name + " i am age of "+age)

//tempalte string
const hello =`my name is ${name} and I am age of ${age}`
console.log(hello)


//string properties and methods
const s = "Hello World"
//diff btw properties and methods is that properties are values associated with an object while methods are functions that are associated with an object
//length is a property that returns the length of a string
//toUpperCase is a method that returns a new string with all the characters in uppercase
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(0,5)) //returns a new string that is a subset of the original string
console.log(s.split(" ")) //returns an array of substrings that are separated by the specified separator
console.log(s.split("")) //returns an array of substrings that are separated by the specified separator

const s1 = "technology, computers, it, code"
console.log(s1.split(", ")) //returns an array of substrings that are separated by the specified separator


//Arrays
//arrays are used to store multiple values in a single variable
//arrays are zero indexed
//arrays can hold any data type
//arrays are mutable (can be changed)
const numbers = [1,2,3,4,5]
//using array constructor
const numbers2 = new Array(1,2,3,4,5)
const fruits = ["apple", "banana", "orange"]
const mixed = [1, "hello", true, null]

console.log(numbers)
console.log(fruits)
console.log(numbers2[0]) //1
console.log(fruits[1]) //banana
fruits.push("grape") //adds a new element to the end of the array

fruits.unshift("mango") //adds a new element to the beginning of the array

fruits.pop() //removes the last element from the array

fruits.shift() //removes the first element from the array
console.log(mixed)


//Importatnt
// Object literals : it is a collection of key-value pairs enclosed in curly braces {}. It is used to store related data and functions together. The keys are also called properties and the values can be of any data type, including functions (which are called methods when they are properties of an object).
const person = {
    name: "John",
    age: 30,
    isStudent: true,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
 
}
console.log(person)
console.log(person.name) //John
console.log(person.age) //30
console.log(person.hobbies[1]) //gaming
console.log(person.address.city) //Anytown

//destructuring objects
const {name: name1, age: age1, isStudent: isStudent1} = person
console.log(name1) //John
console.log(age1) //30
console.log(isStudent1) //true

//destructuring nested objects
const {address: {street, city, state}} = person
console.log(street) //123 Main St
console.log(city) //Anytown
console.log(state) //CA

person.email ="bal@domain.com"//adds a new property to the object
console.log(person.email) //
console.log(person)

//Arrays of objects
const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appointment",
        isCompleted: false
    }
]
console.log(todos)
console.log(todos[1].text) //Meeting with boss

//Json (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.
const todoJSON = JSON.stringify(todos) //converts a JavaScript object or value to a JSON string
console.log(todoJSON)// This  is how the data will be sent to a server or stored in a file

const todoParsed = JSON.parse(todoJSON) //parses a JSON string, constructing the JavaScript value or object described by the string
console.log(todoParsed) //This is how the data will be received from a server or read from a file


//loops
//for loop
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text)
}
//while loop
let i = 0
while(i < todos.length){
    console.log(todos[i].text)
    i++
}

//for of loop
for(let todo of todos){
    console.log(todo.text)
}

//forEach loop
todos.forEach(function(todo){
    console.log(todo.text)
})

//map method
const todoText = todos.map(function(todo){
    return todo.text
})
console.log(todoText) //This will return an array of the text of each todo

//filter method
const completedTodos = todos.filter(function(todo){
    return todo.isCompleted === true
})
console.log(completedTodos) //This will return an array of the todos that are completed

//chaining methods
const completedTodoText = todos.filter(function(todo){
    return todo.isCompleted === true
}).map(function(todo){
    return todo.text
})
console.log(completedTodoText) //This will return an array of the text of the todos that are completed

//conditionals
const x1 = 10
if(x1 > 5){
    console.log("x1 is greater than 5")
}else if (x1 === 10){
 console.log(" x is equal to 10")
}else{
  console.log("x1 is less than 5")
}

//ternary Operator

const y =11;
const color = y > 10? "red": "blue";
console.log(color)

//switch

switch(color){
    case "red":
        console.log("color is red")
        break
    case "blue":
        console.log("color is blue")
        break
    default:
        console.log("color is not red or blue")
}


//functions

function addNums(num1=12, num2){
  return num1+num2
}

console.log(addNums(10,10))

//arrow functions
const addNumsArrow = (num1 = 12, num2) => {
    return num1 + num2
}

console.log(addNumsArrow(10,10))

//lexixal this
const person1 = {
    name: "John",
    greet: function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}
person1.greet() //Hello, my name is John

const person2 = {
    name: "Jane",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`)
    }
}
person2.greet() //Hello, my name is undefined (because arrow functions do not have their own this, they inherit it from the parent scope)   

//Object Oriented Programming
//constructor function
function Person(name, age){
    this.name = name
    this.age = age
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
}
//prototypes are used to add properties and methods to a constructor function. They are shared among all instances of the constructor function.
Person.prototype.sayGoodbye = function(){
    console.log(`Goodbye from ${this.name}`)
}
Person.prototype.species = function(){
    console.log(`${this.name} is a human`)
}
//creating instances of the Person constructor function
const person3 = new Person("John", 30)
console.log(person3) //Person { name: 'John', age: 30 }

const person4 = new Person("Jane", 25)
console.log(person4) //Person { name: 'Jane', age: 25 }

person3.greet() //Hello, my name is John and I am 30 years old
person3.sayGoodbye() //Goodbye from John
person3.species() //John is a human 
console.log(person3)

//classes
class PersonClass {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
    sayGoodbye(){
        console.log(`Goodbye from ${this.name}`)
    }
    species(){
        console.log(`${this.name} is a human`)
    }
}
