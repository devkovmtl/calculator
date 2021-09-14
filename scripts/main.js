const displayScreen = document.querySelector('.calc-screen')
const numericBtns = document.querySelectorAll('button.numeric')
const operandBtns = document.querySelectorAll('button.operand')
const clearBTN = document.querySelector('button[data-op="clear"]')

const OPERAND = [
  'equal',
  'clear',
  'divide',
  'multiply',
  'cancel',
  'subtract',
  'add',
  'negate',
  'float',
]

let userInput
let data = []

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
  userInput = ''
  data = []
}

function operate(fn, a, b) {
  return fn(a, b)
}

function displayToScreen(str) {
  displayScreen.innerText = str
}

function onNumericBtnClick(e) {
  let btnValue = e.target.innerText
  if (userInput && userInput.length === 12) {
    return
  }
  if ((!userInput || !userInput.length) && btnValue === '0') {
    userInput = '0'
  } else if (userInput === '0') {
    userInput = ''
    userInput += btnValue
  } else if (!userInput && userInput !== '0') {
    userInput = btnValue
  } else {
    userInput += btnValue
  }

  displayToScreen(userInput)
}

function onOperandBtnClick(e) {
  // check user UserInput if there is something
  if (!userInput) {
    return
  } else if (userInput && data.length === 0) {
    data.push(userInput)
  }
}

function computeIntermediateStep() {}

/***
 * EVENT LISTENER
 */
// Handle Clear button clean the screen and every variable holding data
clearBTN.addEventListener('click', clear)

// Handle Numeric button
numericBtns.forEach((numericBtn) => {
  numericBtn.addEventListener('click', onNumericBtnClick)
})

// Handle math operation button
operandBtns.forEach((operandBtn) => {
  operandBtn.addEventListener('click', onOperandBtnClick)
})
