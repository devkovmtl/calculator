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
const data = []

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
  if ((!userInput || !userInput.length) && btnValue === '0') {
    userInput = ''
  } else if (userInput) {
    userInput += btnValue
  } else {
    userInput = btnValue
  }

  displayToScreen(userInput)
}

function onOperandBtnClick(e) {}

function computeIntermediateStep() {}

clearBTN.addEventListener('click', clear)

numericBtns.forEach((numericBtn) => {
  numericBtn.addEventListener('click', onNumericBtnClick)
})

operandBtns.forEach((operandBtn) => {
  operandBtn.addEventListener('click', (e) => {
    onOperandBtnClick(e)
  })
})
