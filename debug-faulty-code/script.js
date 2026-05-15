// ======================================
// STEP 2.1 - FIXING SYNTAX ERRORS
// ======================================

// Faulty Code:
// let name = "Wayne

// Fixed Code:
let name = "Wayne";

console.log("Name:", name);


// ======================================
// STEP 2.2 - FIXING RUNTIME ERRORS
// ======================================

// Faulty Code:
// console.log(user.age);

// Fixed Code:
const user = {
    name: "Wayne",
    age: 19
};

console.log("User Age:", user.age);


// ======================================
// STEP 3 - FIXING LOGICAL ERRORS
// ======================================

// Faulty Code:
// let total = 5 + "5";

// Fixed Code:
let total = 5 + 5;

console.log("Total:", total);


// ======================================
// STEP 4 - DEBUGGING USING CONSOLE
// ======================================

function multiplyNumbers(a, b) {

    console.log("Value of a:", a);
    console.log("Value of b:", b);

    return a * b;
}

const result = multiplyNumbers(4, 5);

console.log("Multiplication Result:", result);


// ======================================
// STEP 5 - FINAL TESTING
// ======================================

function greetUser(username) {

    if (!username) {
        return "Username is required";
    }

    return `Hello, ${username}`;
}

console.log(greetUser("Wayne"));


// ======================================
// CLEAN CODE
// ======================================

// All unnecessary logs and faulty code removed.
// Program executes without errors.