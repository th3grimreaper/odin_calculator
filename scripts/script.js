let buttons = document.querySelectorAll('.op-button');
let calcScreen = document.querySelector('.calculation');
let screen = document.querySelector('.typing-area');
let allClear = document.querySelector('.clear');
let backspace = document.querySelector('.backspace');
let addBtn = document.querySelector('.add');

//global variables
let sum;

//clear screen
allClear.addEventListener('click', clearScreen);
//backspace 
backspace.addEventListener('click', delOneChar);
//addition
addBtn.addEventListener('click', addNum);

//add two (or more) numbers
function addNum() {
  
}

//show things on screen upon click
let buttonsArr = Array.from(buttons);
buttonsArr.forEach((btn) => {
  btn.addEventListener('click', printOnScr);
});

//print button values on screen
function printOnScr(event) {
  screen.textContent += event.target.textContent;
  if(screen.textContent.length >=12) {
    screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1);
  }
}

function clearScreen() {
  screen.textContent = "";
}

function delOneChar() {
  screen.textContent = screen.textContent.substr(0, screen.textContent.length - 1);
}

