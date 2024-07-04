// takes in 2 numbers and calculates =, -, x, /
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => { return ((num2 == 0) ? "Don't you dare divide by 0 🔪" : num1 / num2) }

// validate input
// if (isNaN(num1) || isNaN(num2)) {
//     console.log("Invalid input. Please enter numbers only.");
// } else {
//     // takes the symbol using operator([sign]) and performs the operation
//     const operators = {
//         '+': add,
//         '-': subtract,
//         'x': multiply,
//         '/': divide
//     };

//     function operator(sign, num1, num2) {
//         if (operators[sign]) {
//             console.log(operators[sign](num1, num2));
//         } else {
//             console.log("Invalid operator");
//         }
//     }
// }

let condition = "";
let symbol = "";
let sign = ""

let num = 0;
let num2 = 0;
const calculator = document.querySelector(".calculator")
const display = calculator.querySelector(".display")
display.textContent = num

function createNum(digit) {
    if (condition == "") {
        num = (num * 10) + digit;
        display.textContent = num.toString();
    } else if (condition == "num1 is created") {
        num2 = (num2 * 10) + digit;
        display.textContent = num + " " + symbol + " " + num2;
    }

}

function operatorClicked(sign) {
    sign = sign;
    condition = "num1 is created"
    let num1 = num;
    symbol = "";
    switch (sign) {
        case "add":
            symbol = "+";
            break;
        case "subtract":
            symbol = "-"
            break;
        case "multiply":
            symbol = "x"
            break;
        case "divide":
            symbol = "÷"
            break;
        default:
            symbol = "ye kaise dekh liya? you need to die"

    }
    display.textContent = num1 + symbol;
}

function clearDisplay() {
    display.textContent = "";
    num = 0;
    num2 = 0;
    symbol = "";
    condition = ""
}