// STEP 2: ARRAY DESTRUCTURING

const colors = ["red", "blue", "green", "yellow"];

// basic destructuring
const [first, second, third] = colors;

console.log(first);   // red
console.log(second);  // blue
console.log(third);   // green

// skipping elements
const [, , thirdColor] = colors;
console.log(thirdColor); // green

// STEP 3: OBJECT DESTRUCTURING

const student = {
  name: "Wayne",
  age: 19,
  course: "BSIT"
};

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

// STEP 4: ADVANCED DESTRUCTURING

const user = {
  id: 1,
  profile: {
    username: "wayne123",
    email: "wayne@email.com"
  }
};

// nested destructuring
const {
  profile: { username, email }
} = user;

console.log(username);
console.log(email);

// default values + renaming
const { status = "active", id: userId } = user;

console.log(status); // active
console.log(userId); // 1

// STEP 5: FUNCTION PARAMETER DESTRUCTURING

function displayStudent({ name, age, course }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Course: ${course}`);
}

const studentInfo = {
  name: "Wayne",
  age: 19,
  course: "BSIT"
};

displayStudent(studentInfo);