let buttons = document.querySelectorAll('.op-button');
let screen = document.querySelector('.typing-area');
let allClear = document.querySelector('.clear');
let backspace = document.querySelector('.backspace');

//show things on screen upon click
let buttonsArr = Array.from(buttons);
buttonsArr.forEach((btn) => {
  btn.addEventListener('click', printOnScr);
});

//print button values on screen
function printOnScr(event) {
  // console.log(event.target.textContent);
  screen.textContent += event.target.textContent;
}

//clear screen
allClear.addEventListener('click', clearScreen);

function clearScreen() {
  screen.textContent = "";
}

//backspace 
backspace.addEventListener('click', delOneChar);

function delOneChar() {
  screen.textContent = screen.textContent.substr(0, screen.textContent.length - 1);
}
