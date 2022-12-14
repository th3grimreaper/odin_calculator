let buttons = document.querySelectorAll('.op-button');
let screen = document.querySelector('.typing-area');
let allClear = document.querySelector('.clear');
let backspace = document.querySelector('.backspace');

//clear screen
allClear.addEventListener('click', clearScreen);
//backspace 
backspace.addEventListener('click', delOneChar);

//show things on screen upon click
let buttonsArr = Array.from(buttons);
buttonsArr.forEach((btn) => {
  btn.addEventListener('click', printOnScr);
});

//print button values on screen
function printOnScr(event) {
  screen.textContent += event.target.textContent;
}

function clearScreen() {
  screen.textContent = "";
}

function delOneChar() {
  screen.textContent = screen.textContent.substr(0, screen.textContent.length - 1);
}
