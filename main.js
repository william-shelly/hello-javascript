// my name (string)
let myName = "William Shelly";

// a random number (numeric)
let Max = 100;
let Min = 1;
let randomNumber = Math.floor(Math.random() * (Max - Min) );

// boolean (boolean)
let isHuman = true;

let spacer = " ";

// output 3 variables to console.log
console.log(myName);
console.log(randomNumber);
console.log(isHuman);

let sketchPad = document.querySelector('#sketchPad');
let log = document.createElement('div');
let log2 = document.createElement('div');
let log3 = document.createElement('div');

myName = document.createTextNode(myName);
randomNumber = document.createTextNode(randomNumber);
isHuman = document.createTextNode(isHuman);
spacer = document.createTextNode(spacer);

log.appendChild(myName);
log2.appendChild(randomNumber);
log3.appendChild(isHuman);

sketchPad.appendChild(log);
sketchPad.appendChild(log2);
sketchPad.appendChild(log3);

log.classList.add('name');
log2.classList.add('random');
log3.classList.add('human');