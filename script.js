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
	return num1 / num2;
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


console.log(operate(2,"+",7));
console.log(operate(2,"-",7));
console.log(operate(2,"/",7));
console.log(operate(2,"*",7));