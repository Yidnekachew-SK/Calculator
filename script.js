function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2){
	return num1 * num2;
}

function divide(num1, num2) {
	if(num2 === 0){
		return "Math Error";
	} else{
		return num1 / num2;
	}
}


function operate(number1,operation,number2){
	let finalResult = 0;
	switch(operation){
		case "+":
			finalResult = add(number1,number2);
			break;
		case "-":
			finalResult = subtract(number1,number2);
			break;
		case "*":
			finalResult = multiply(number1,number2);
			break;
		case "/":
			finalResult = divide(number1,number2);
			break;
	}
	return finalResult;
}

const displayer = document.querySelector(".result-displayer");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let calculatedResult = "";
let isOperatorClicked = false;
let isEqualToClicked = false;

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", event => {
	if(isEqualToClicked){
		displayer.textContent = "";
	}

	if(!isOperatorClicked){
		firstNumber += event.target.textContent;
		displayer.textContent = firstNumber;
		
	} else{
		displayer.textContent = "";
		secondNumber += event.target.textContent;
		displayer.textContent = secondNumber;
	}
}))

const operatorButton = document.querySelectorAll(".operator");
operatorButton.forEach(button => button.addEventListener("click", event => {
	if(firstNumber != ""){
		if(secondNumber != ""){
			console.log("num1: " + firstNumber);
			console.log("oper: " + operator)
			console.log("num2: " + secondNumber);
			let calculatedResult = operate(parseInt(firstNumber),operator,parseInt(secondNumber));
			displayer.textContent = calculatedResult;
			console.log("result: " + calculatedResult);

			firstNumber = calculatedResult.toString();
			secondNumber = "";
			isOperatorClicked = false;
		}
		displayer.textContent = "";
		operator = event.target.textContent;
		displayer.textContent = operator;
		isOperatorClicked = true;
	}
}))

const clearDisplay = document.querySelector(".clear");
clearDisplay.addEventListener("click", () => {
	displayer.textContent = "";
	firstNumber = "";
	secondNumber = "";
	operator = "";
	isOperatorClicked = false;
	isEqualToClicked = false;
})

const equalButton = document.querySelector(".equalTo");
equalButton.addEventListener("click", () => {
	console.log("num1: " + firstNumber);
	console.log("oper: " + operator)
	console.log("num2: " + secondNumber);
	if(operator === "" && secondNumber === ""){
		calculatedResult = firstNumber;
	} else if(secondNumber === ""){
		calculatedResult  = "Error";
	} else{
		calculatedResult = operate(parseInt(firstNumber),operator,parseInt(secondNumber));
	}
	displayer.textContent = calculatedResult;
	console.log("result: " + calculatedResult);

	firstNumber = "";
	secondNumber = "";
	isOperatorClicked = false;
	isEqualToClicked = true;
})