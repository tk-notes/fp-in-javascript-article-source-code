function doubleSum(a, b) {
  return (a + b) * 2;
}

function doubleSubtraction(a, b) {
  return (a - b) * 2;
}

function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function doubleOperator(f, a, b) {
  return f(a, b) * 2;
}

let sumResult = doubleOperator(sum, 3, 1); // 8
let subtractionResult = doubleOperator(subtraction, 3, 1); // 4

console.log(sumResult, subtractionResult);
