// takes in 2 numbers and calculates =, -, x, /
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => { return ((num2 == 0) ? "Don't you dare divide by 0 🔪" : num1 / num2) }

// let num1 = parseInt(prompt("give first number"));
// let num2 = parseInt(prompt("give second number"));
// let sign = prompt("enter operation: +,-,x,/")

// validate input
if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter numbers only.");
} else {
    // takes the symbol using operator([sign]) and performs the operation
    const operators = {
        '+': add,
        '-': subtract,
        'x': multiply,
        '/': divide
    };

    function operator(sign, num1, num2) {
        if (operators[sign]) {
            console.log(operators[sign](num1, num2));
        } else {
            console.log("Invalid operator");
        }
    }
}

// console.log(operator(sign, num1, num2))
