const displayScreen = document.querySelector('.calc-screen')
const buttons = document.querySelectorAll('button')
let num = ''
let displayNum = []
function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (!b || b === 0) {
    return
  }
  return a / b
}

function clear() {
  displayScreen.textContent = ''
}

function operate(fn, a, b) {
  return fn(a, b)
}

function display(str) {
  displayScreen.textContent = str
}

function onBtnClick(e) {
  const name = e.target.name

  displayScreen.textContent = displayNum
  if (name === 'equal') {
    console.log('Equal')
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', onBtnClick)
})
