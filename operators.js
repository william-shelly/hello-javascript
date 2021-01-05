let input1 = 120;
let input2 = 37;
let operation = "divide";
let result = 0;

let resultArea = document.getElementById('resultArea');
let studentsList = document.getElementById('studentsList');


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

function add(a,b) {
	let total = a + b;
	console.log("a = " + a);
	console.log("b = " + b);
	console.log("total = " + total);
	if (total < 100) {
		resultArea.innerHTML = "<strong>total</strong> = " + total;
	} else if (total => 100) {
		resultArea.innerHTML = "<strong>TOTAL</strong> = " + total;
	}
}

add(44,55);


let list = ['a','b','c','d'];

let list2 = [23,46,43,22];

let list3 = ['jon','tulsa',1950, 70];


console.log(list);
console.log(list2);
console.log(list3);

console.log(list[1]);

// undefined is outside scope of array

console.log(list);
console.log(list.length);

list.push("e");

console.log(list);


let students = ["Hattie","Savannah"];

console.log(students);

students.push("Will","Shawn");

console.log(students);

studentsList.innerHTML = "<strong>Students</strong> = " + students;

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

/* incrementing

i++;
i = i + 1;

decrementing

i--;

i = i - 1;

Loops

For Loop

dealing with collections or arrays

let x = [11, 22, 33, 44, 55, 66];

console.log("total in x: " + x.length);

for (let i = 0; i < x.length; i++)
{
    console.log("i: " + i);
    console.log("x: " + x[i]);
}

While Loop

var i = 3;
while (i > 0)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1;
} */