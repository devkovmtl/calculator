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

function operate(fn, a, b) {
  return fn(a, b)
}
