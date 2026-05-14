let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);

fruits.push("Mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Grapes");
console.log(fruits);

console.log(fruits.length);


let student = {
    name: "Wayne",
    age: 18,
    course: "BSIT"
};

console.log(student.name);
console.log(student["course"]);

student.age = 19;
student["course"] = "Information Technology";

console.log(student);


let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log(doubled);

let filtered = numbers.filter(num => num > 2);
console.log(filtered);

numbers.forEach(num => {
    console.log(num);
});


let users = [
    { name: "Wayne", age: 18 },
    { name: "John", age: 20 },
    { name: "Anna", age: 19 }
];

console.log(users);

users.push({ name: "Mark", age: 21 });

console.log(users);

users.forEach(user => {
    console.log(user.name + " - " + user.age);
});