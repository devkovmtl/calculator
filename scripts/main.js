const displayScreen = document.querySelector('.calc-screen')
const numericBtns = document.querySelectorAll('button.numeric')
const operationBtns = document.querySelectorAll('button.operation')
const clearBtn = document.querySelector('button.clear')
const cancelBtn = document.querySelector('button.cancel')
const equalBtn = document.querySelector('button.equal')

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

function onOperationdBtnClick(e) {
  const operationName = e.target.name
  const operationSymbol = e.target.innerText
  const currentVal = parseFloat(userInput)

  if (data && data.length) {
    data.push(currentVal)

    const result = evaluate(data)
    console.log(result)

    data.push(result)
    data.push(operationName)
    userInput = ''
    displayToScreen(userInput)
  } else {
    data.push(currentVal)
    data.push(operationName)
    userInput = ''
    displayToScreen(userInput)
  }
}

function evaluate() {
  console.log(data)
  const second = data.pop()
  const operator = data.pop()
  const first = data.pop()

  switch (operator) {
    case 'add':
      return operate(add, first, second)
    case 'subtract':
      return operate(subtract, first, second)
    case 'divide':
      return operate(divide, first, second)
    case 'multiply':
      return operate(multiply, first, second)
    default:
      return second
  }
}

function onCancelBtnClick() {
  if (userInput) {
    userInput = userInput.slice(0, userInput.length - 1)
  }
  // console.log(userInput)
  // console.log(data)
  displayToScreen(userInput)
}

function onEqualBtnClick(e) {
  if (data && data.length) {
    const currentVal = parseFloat(userInput)
    data.push(currentVal)
    const result = evaluate()
    userInput = result
    displayToScreen(result)
  }
}

/***
 * EVENT LISTENER
 */
// Handle Clear button clean the screen and every variable holding data
clearBtn.addEventListener('click', clear)

// Handle Numeric button
numericBtns.forEach((numericBtn) => {
  numericBtn.addEventListener('click', onNumericBtnClick)
})

// Handle math operation button
operationBtns.forEach((operationBtn) => {
  operationBtn.addEventListener('click', onOperationdBtnClick)
})

cancelBtn.addEventListener('click', onCancelBtnClick)
equalBtn.addEventListener('click', onEqualBtnClick)
