let input1 = 120;
let input2 = 37;
let operation = "divide";
let result = 0;

if(input1 == 0 || input2 == 0) {
	console.log("Enter a value great than 0.")
} else {
	if (operation == "add") {
		result = input1 + input2;
	} else if (operation == "subtract") {
		result = input1 - input2;
	} else if (operation == "multiply") {
		result = input1 * input2;
	} else if (operation == "divide") {
		result = input1 / input2;
	} else {
		result = "?";
	}
	console.log(result);
}


// let result = input1 - input2;

