
let name = "Wayne";
const age = 18;

let score = 10;
score = 20;

console.log(name, age, score);


const add = (a, b) => a + b;

const greet = (name) => {
    return `Hello ${name}`;
};

console.log(add(5, 3));
console.log(greet("Wayne"));


const firstName = "Wayne";
const lastName = "Student";

console.log(`Full Name: ${firstName} ${lastName}`);


const student = {
    id: 101,
    course: "BSIT",
    year: 1
};

const { id, course, year } = student;

console.log(id, course, year);


const colors = ["Red", "Green", "Blue"];
const [c1, c2, c3] = colors;

console.log(c1, c2, c3);


const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);


const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2);


const multiply = (a, b = 2) => {
    return a * b;
};

console.log(multiply(5));
console.log(multiply(5, 10));