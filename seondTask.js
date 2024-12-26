// Function to add numbers
function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to subtract numbers
function subtract(...numbers) {
    if (numbers.length < 2) {
        return "Please provide at least two numbers.";
    }
    return numbers.reduce((result, num) => result - num);
}

// Function to multiply numbers
function multiply(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

// Function to divide numbers
function divide(...numbers) {
    if (numbers.length < 2) {
        return "Please provide at least two numbers.";
    }
    return numbers.reduce((result, num) => {
        if (num === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return result / num;
    });
}

// Example Usage
console.log("Addition: ", add(2, 5, 10));                // 17
console.log("Subtraction: ", subtract(20, 5, 3));        // 12
console.log("Multiplication: ", multiply(2, 5, 3));      // 30
console.log("Division: ", divide(100, 2, 5));            // 10

// Handling Division by Zero
try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);
}
