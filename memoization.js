function sum(a, b) {
  return a + b;
}

sum(3, sum(5, 8));

sum(3, 13);

console.log(sum(3, 13) == sum(3, sum(5, 8)));
