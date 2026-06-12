# JavaScript Fundamentals — Interview Reference

---

## 1. Variables

| Keyword | Scope | Reassignable | Redeclarable |
|---------|-------|-------------|--------------|
| `var`   | Function/Global | Yes | Yes |
| `let`   | Block | Yes | No |
| `const` | Block | No | No |

```js
let age = 25;
age = 30;         // OK

const name = "John";
// name = "Doe"; // TypeError — cannot reassign const
```

---

## 2. Primitive Data Types

| Type | Example | `typeof` |
|------|---------|---------|
| String | `"hello"` | `"string"` |
| Number | `25`, `4.7` | `"number"` |
| Boolean | `true` | `"boolean"` |
| null | `null` | `"object"` ⚠️ quirk |
| undefined | `let x;` | `"undefined"` |
| Symbol | `Symbol()` | `"symbol"` |

> **Interview note:** `typeof null === "object"` is a known JavaScript bug kept for backwards compatibility.

---

## 3. Strings — Concatenation & Template Literals

```js
// Concatenation
"my name is " + name + " i am " + age

// Template literal (preferred)
const hello = `my name is ${name} and I am ${age}`;
```

### Useful String Methods

```js
const s = "Hello World";
s.length           // 11       — property, not a method
s.toUpperCase()    // "HELLO WORLD"
s.toLowerCase()    // "hello world"
s.substring(0, 5)  // "Hello"
s.split(" ")       // ["Hello", "World"]
s.split("")        // ["H","e","l","l","o"," ","W","o","r","l","d"]
```

---

## 4. Arrays

```js
const fruits = ["apple", "banana", "orange"];

fruits.push("grape")    // add to end
fruits.unshift("mango") // add to beginning
fruits.pop()            // remove from end
fruits.shift()          // remove from beginning

fruits[1]               // "banana" — zero-indexed
```

---

## 5. Object Literals

```js
const person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding"],
    address: { city: "Anytown", state: "CA" }
};

person.name            // "John"  — dot notation
person["age"]          // 30      — bracket notation
person.email = "x@y.com" // add new property at runtime
```

### Destructuring

```js
// Rename while destructuring
const { name: name1, age: age1 } = person;

// Nested destructuring
const { address: { city, state } } = person;
```

---

## 6. Arrays of Objects + JSON

```js
const todos = [
    { id: 1, text: "Take out trash", isCompleted: true },
    { id: 2, text: "Meeting with boss", isCompleted: true },
    { id: 3, text: "Dentist appointment", isCompleted: false }
];

todos[1].text  // "Meeting with boss"

// JSON — used for API communication / storage
const json   = JSON.stringify(todos);  // JS → JSON string
const parsed = JSON.parse(json);       // JSON string → JS
```

---

## 7. Loops

```js
// Classic for
for (let i = 0; i < todos.length; i++) { console.log(todos[i].text) }

// while
let i = 0;
while (i < todos.length) { console.log(todos[i].text); i++; }

// for...of  (values)
for (let todo of todos) { console.log(todo.text) }

// forEach  (no return value)
todos.forEach(todo => console.log(todo.text));
```

---

## 8. Array Higher-Order Methods

```js
// map — transforms each element, returns new array
const texts = todos.map(todo => todo.text);
// ["Take out trash", "Meeting with boss", "Dentist appointment"]

// filter — keeps elements matching condition, returns new array
const done = todos.filter(todo => todo.isCompleted === true);

// chaining
const doneTexts = todos
    .filter(todo => todo.isCompleted)
    .map(todo => todo.text);
// ["Take out trash", "Meeting with boss"]
```

> **Interview note:** `map` always returns same length; `filter` may return fewer elements.

---

## 9. Conditionals

```js
// if / else if / else
if (x > 5) { ... } else if (x === 10) { ... } else { ... }

// Ternary — one-liner
const color = y > 10 ? "red" : "blue";

// switch
switch (color) {
    case "red":  console.log("red");  break;
    case "blue": console.log("blue"); break;
    default:     console.log("other");
}
```

---

## 10. Functions

```js
// Regular function — default parameters supported
function addNums(num1 = 12, num2) {
    return num1 + num2;
}

// Arrow function
const addNumsArrow = (num1 = 12, num2) => num1 + num2;
```

### `this` — Regular vs Arrow

```js
// Regular function: `this` = the object that called it
const person1 = {
    name: "John",
    greet: function() { console.log(`Hello, ${this.name}`) }
};
person1.greet(); // "Hello, John"

// Arrow function: `this` = inherited from enclosing scope (lexical)
const person2 = {
    name: "Jane",
    greet: () => { console.log(`Hello, ${this.name}`) }
};
person2.greet(); // "Hello, undefined" ⚠️
```

> **Interview note:** Arrow functions do **not** have their own `this`. Never use them as object methods when you need `this`.

---

## 11. Object-Oriented Programming

### Constructor Function + Prototype

```js
function Person(name, age) {
    this.name = name;
    this.age  = age;
}

// Prototypes are shared across ALL instances (memory-efficient)
Person.prototype.sayGoodbye = function() {
    console.log(`Goodbye from ${this.name}`);
};

const p = new Person("John", 30);
p.sayGoodbye(); // "Goodbye from John"
```

### ES6 Class (syntactic sugar over prototypes)

```js
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age}`);
    }

    sayGoodbye() {
        console.log(`Goodbye from ${this.name}`);
    }
}

const p = new PersonClass("John", 30);
p.greet();
```

> **Interview note:** Classes are syntactic sugar — JavaScript still uses prototypal inheritance under the hood. Methods defined inside a class live on the prototype, not the instance.

---

## Quick-Fire Interview Q&A

| Question | Answer |
|----------|--------|
| `var` vs `let` vs `const`? | `var` is function-scoped and hoisted; `let`/`const` are block-scoped. `const` can't be reassigned. |
| `==` vs `===`? | `==` coerces types; `===` checks type AND value. Always prefer `===`. |
| `null` vs `undefined`? | `null` = intentionally empty; `undefined` = not yet assigned. |
| What is hoisting? | `var` declarations and function declarations are moved to the top of their scope at compile time. |
| What is a closure? | A function that retains access to its outer scope's variables even after the outer function has returned. |
| `map` vs `forEach`? | `map` returns a new array; `forEach` returns `undefined`. |
| Why is `typeof null === "object"`? | A legacy bug in JavaScript that can't be fixed without breaking old code. |
| When NOT to use arrow functions? | As object methods (no own `this`), as constructors (`new` won't work), when `arguments` object is needed. |
