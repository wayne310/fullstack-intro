
// STEP 2: Conditional Statements

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// STEP 3: Loops

for (let i = 1; i <= 5; i++) {
    console.log("Loop count:", i);
}


// STEP 4: Functions

function add(a, b) {
    return a + b;
}

function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}


// TEST OUTPUTS (terminal display)

console.log("Sum:", add(5, 3));
console.log("Age status:", checkAge(17));
console.log("Age status:", checkAge(20));