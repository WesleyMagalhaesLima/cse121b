/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers(add1, add2) {
    add1 = Number(document.getElementById("add1").value);
    add2 = Number(document.getElementById("add2").value);
    return document.querySelector("#sum").value = add(add1, add2)
}

var addButton = document.getElementById("addNumbers");
addButton.addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    const subtract1 = Number(document.getElementById("subtract1").value);
    const subtract2 = Number(document.getElementById("subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2)
}

const subtractButton = document.getElementById("subtractNumbers");
subtractButton.addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    const factor1 = Number(document.getElementById("factor1").value);
    const factor2 = Number(document.getElementById("factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2)
}

const multiplicationButton = document.getElementById("multiplyNumbers");
multiplicationButton.addEventListener("click", multiplyNumbers)

/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;
}

const divideNumbers = () => {
    const dividend = Number(document.getElementById("dividend").value);
    const divisor = Number(document.getElementById("divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
};

const divisionButton = document.getElementById("divideNumbers");
divisionButton.addEventListener("click", divideNumbers);

/* Decision Structure */

const getTotalButton = document.getElementById("getTotal");
getTotalButton.addEventListener("click", getTotalDue);

function getTotalDue() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const isMemberCheckBox = document.getElementById("member");
    const isMember = isMemberCheckBox.checked;

    let totalDue = subtotal;
    if (isMember) {
        totalDue *= 0.8;
    }

    const totalSpan = document.getElementById("total");
    totalSpan.textContent = `$${totalDue.toFixed(2)}`;
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray.join(",");

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("odds").innerHTML = oddNumbers.join(",");

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 == 0);
document.getElementById("evens").innerHTML = evenNumbers.join(",");

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map((number) => number * 2);

/* Output Sum of Multiplied by 2 Array */
multipliedArray = numbersArray.map((number) => number * 2);
document.getElementById("sumOfMultiplied").innerHTML = multipliedArray.reduce((sum, number) => sum + number)
