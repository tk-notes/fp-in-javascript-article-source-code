function even(number) {
  return number % 2 == 0;
}

let listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = listOfNumbers.filter(even);

console.log(evenNumbers);

// Solving this problem: https://www.hackerrank.com/challenges/fp-filter-array/problem

function smaller(number) {
  return number < this;
}

function filterArray(x, listOfNumbers) {
  return listOfNumbers.filter(smaller, x);
}

let numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];

let allSmallerOnes = filterArray(3, numbers);

console.log(allSmallerOnes); // [2, 1, 0]

// filtering people by age

let people = [
  { name: "TK", age: 26 },
  { name: "Kaio", age: 10 },
  { name: "Kazumi", age: 30 }
];

function olderThan21(person) {
  return person.age > 21;
}

function overAge(people) {
  return people.filter(olderThan21);
}

let overAgePeople = overAge(people);
console.log(overAgePeople);
