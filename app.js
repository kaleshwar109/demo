function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function calculate(operation, a, b) {
  if (operation == "add") {
    return add(a, b);
  }
  if (operation == "divide") {
    return divide(a, b);
  }
}

console.log(calculate("add", "5", 10));
console.log(calculate("divide", 10, 0));

