function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b ===0) {
        return "Error: Division by zero is not allowed";
    }
    return a / b;
}

function calculator(operation, firstDigit, secondDigit) {
    if (typeof firstDigit !== "number" || typeof secondDigit !== "number") {
        return "Error: Invalid number";
    }

    if (operation === "add") {
        return addition(firstDigit, secondDigit);
    } else if (operation === "subtract") {
        return subtraction(firstDigit, secondDigit);
    } else if (operation === "multiply") {
        return multiplication(firstDigit, secondDigit);
    } else if (operation === "divide") {
        return division(firstDigit, secondDigit);
    } else {
        return "Error: Invalid operation";
    }
}

console.log(calculator("add", 40, 4));
console.log(calculator("subtract", 70, 8));
console.log(calculator("multiply", 7, 5));
console.log(calculator("divide", 90, 12));
console.log(calculator("divide", 100000, 0));
console.log(calculator("invalid", 9, 3));