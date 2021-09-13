const displayScreen = document.querySelector('.calc-screen')
const numericBtns = document.querySelectorAll('button.numeric')
const operandBtns = document.querySelectorAll('button.operand')

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

let userInput = ''
const data = []
const operations = []
let lastData = ''

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

function displayToScreen(str) {
  displayScreen.textContent = str
}

function onNumericBtnClick(e) {
  userInput += e.target.name
  displayToScreen(userInput)
}

function onOperandBtnClick(e) {
  const operandName = e.target.name
  const operandSymbol = e.target.innerHTML
  // console.log(e.target.name)
  // console.log(e.target.innerHTML)

  console.log(userInput)
  data.push(userInput)
  data.push(operandSymbol)
  operations.push(operandName)
  userInput = userInput + operandSymbol
  displayToScreen(userInput)
}

function computeIntermediateStep() {
  console.log(data)
}

numericBtns.forEach((numericBtn) => {
  numericBtn.addEventListener('click', (e) => {
    lastData = data[data.length - 1]
    console.log(lastData)
    onNumericBtnClick(e)
  })
})

operandBtns.forEach((operandBtn) => {
  operandBtn.addEventListener('click', (e) => {
    lastData = data[data.length - 1]

    if (operations.length === 0) {
      onOperandBtnClick(e)
    } else {
      // compute step
      computeIntermediateStep()
    }
  })
})
