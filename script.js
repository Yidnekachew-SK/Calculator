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
isDecimalPointClicked = false;

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", event => {
	if(isEqualToClicked){
		displayer.textContent = "";
	}

	if(!isOperatorClicked && firstNumber.length < 15){
		firstNumber += event.target.textContent;
		displayer.textContent = firstNumber;
		
	} else if (isOperatorClicked && secondNumber.length < 15){
		displayer.textContent = "";
		secondNumber += event.target.textContent;
		displayer.textContent = secondNumber;
	}
}))

const operatorButton = document.querySelectorAll(".operator");
operatorButton.forEach(button => button.addEventListener("click", event => {
	if(event.target.className === "operator minus" && firstNumber === ""){
		firstNumber += event.target.textContent;
		displayer.textContent = firstNumber;
	}else if(event.target.className === "operator minus" && isOperatorClicked && secondNumber === ""){
		secondNumber += event.target.textContent;
		displayer.textContent = secondNumber;
	}else if(firstNumber != ""){
		if(secondNumber != ""){
			let calculatedResult = operate(parseFloat(firstNumber),operator,parseFloat(secondNumber));
			displayer.textContent = calculatedResult;

			firstNumber = calculatedResult.toString();
			secondNumber = "";
			isOperatorClicked = false;
			isDecimalPointClicked = false;
		}
		displayer.textContent = "";
		operator = event.target.textContent;
		displayer.textContent = operator;
		isOperatorClicked = true;
		isDecimalPointClicked = false;
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
	isDecimalPointClicked = false;
})

const equalButton = document.querySelector(".equalTo");
equalButton.addEventListener("click", () => {
	if(operator === "" && secondNumber === ""){
		calculatedResult = firstNumber;
	} else if(secondNumber === ""){
		calculatedResult  = "Error";
	} else{
		calculatedResult = operate(parseFloat(firstNumber),operator,parseFloat(secondNumber));
	}
	displayer.textContent = calculatedResult;

	firstNumber = "";
	secondNumber = "";
	isOperatorClicked = false;
	isEqualToClicked = true;
	isDecimalPointClicked = false;
})

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
	if(firstNumber != "" && !isDecimalPointClicked && secondNumber === "" && operator === ""){
		firstNumber += event.target.textContent;
		displayer.textContent = firstNumber;
		isDecimalPointClicked = true;
	} else if(secondNumber != "" && secondNumber != "-" && !isDecimalPointClicked){
		secondNumber += event.target.textContent;
		displayer.textContent = secondNumber;
		isDecimalPointClicked = true;
	}
})

const undo = document.querySelector(".undo");
undo.addEventListener("click", () => {
	if(firstNumber != "" && operator === "" && secondNumber === ""){
		let text = displayer.textContent;
		let splitText = text.split('');
		let updatedText = splitText.splice(-1,1);
		firstNumber = splitText.join().replace(/[,]/g, "");
		displayer.textContent = firstNumber;
	} else if(secondNumber != "" && operator != ""){
		let text = displayer.textContent;
		let splitText = text.split('');
		let updatedText = splitText.splice(-1,1);
		secondNumber = splitText.join().replace(/[,]/g, "");
		displayer.textContent = secondNumber;
	} else if(operator != "" && secondNumber === ""){
		operator = "";
		displayer.textContent = operator;
		isOperatorClicked = false;
	}
})