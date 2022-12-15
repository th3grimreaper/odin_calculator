let buttons = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.op');
let calcScreen = document.querySelector('.calculation');
let screen = document.querySelector('.typing-area');
let allClear = document.querySelector('.clear');
let backspace = document.querySelector('.backspace');
let equalOp = document.querySelector('.equalto');

//global variables
let operationResult, numOne, numTwo, op;

//clear screen
allClear.addEventListener('click', clearScreen);
//backspace 
backspace.addEventListener('click', delOneChar);

//operator buttons
Array.from(operators).forEach((operator) => {
  operator.addEventListener('click', operateFunc);
})

function operateFunc(e) {
  if (op) {
    numTwo = parseFloat(screen.textContent);
    console.log(numTwo);
    operationResult = operate(op, numOne, numTwo);
    numOne = operationResult;
    screen.textContent = "";
    op = e.target.textContent;
    calcScreen.textContent = numOne + op;
  } else {
    op = e.target.textContent;
    numOne = parseFloat(screen.textContent);
    screen.textContent = "";
    calcScreen.textContent = numOne + op;
  }
}

equalOp.addEventListener('click', () => {
  numTwo = parseFloat(screen.textContent);
  calcScreen.textContent += numTwo;
  screen.textContent = operate(op, numOne, numTwo);
  operationResult = screen.textContent;
});

//perform operations
function operate(operator, first, second) {
  switch (operator) {
    case "+":
      operationResult = add(first,second);
      break;
    case "-":
      operationResult = subtract(first, second);
      break;
    case "*":
      operationResult = multiply(first, second);
      break;
    case "/":
      operationResult = divide(first, second);
      break;
    default:
      console.log("enter a valid operand");
      break;
  }
  return operationResult;
}

//operation functions
let add = (one, two) => {
  return one+two;
};

let subtract = (one, two) => {
  return one-two;
};

let multiply = (one, two) => {
  return one*two;
};

let divide = (one, two) => {
  return one/two;
};

//show things on screen upon click
let buttonsArr = Array.from(buttons);
buttonsArr.forEach((btn) => {
  btn.addEventListener('click', printOnScr);
});

//print button values on screen
function printOnScr(event) {
  screen.textContent += event.target.textContent;
  if(screen.textContent.length > 12) {
    screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
  }
}

function clearScreen() {
  op = "";
  operationResult = 0;
  numOne = 0;
  numTwo = 0;
  screen.textContent = "";
  calcScreen.textContent = "";
}

function delOneChar() {
  screen.textContent = screen.textContent.substr(0, screen.textContent.length - 1);
  if(screen.textContent === "") {
    screen.textContent = calcScreen.textContent;
    calcScreen.textContent =  "";
    screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    op = "";
    numOne = screen.textContent;
  }
}
