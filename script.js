// Write a function which adds two numbers together

function addTwoNum(num1, num2) {
  return num1 + num2;
}

// Assign our inputs to variables

let numberOne = document.querySelector('#num1');
let numberTwo = document.querySelector('#num2');

// Grab the button

let button = document.querySelector('button');

// Grab the output box

let outputElement = document.querySelector('p');
let outPut = document.querySelector('p')
// Write a function which updates the content of the output box
// In the function, we may need to call our addTwoNum function

function outPutter() {
  outputElement.innerHTML = parseInt(numberOne.value) + parseInt(numberTwo.value)
}

// Add an eventListener to the button
// When the button is clicked, add the two input numbers and produce an output

button.addEventListener('click', outPutter);

// Question 1: Do you run into a problem with adding numbers and getting an unexpected output? For example, when both inputs are `1` getting `11` as an output rather than `2`? Why do you think this is?

// Question 2: How can we ensure the inputs given to the function will always be valid? In other words, that they're both numbers.

// Question 3: Is there a difference between using let and const to define the variables for our elements? Which might we prefer to use?

