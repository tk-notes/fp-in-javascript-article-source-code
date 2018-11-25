let people = [
  { name: "TK", age: 26 },
  { name: "Kaio", age: 10 },
  { name: "Kazumi", age: 30 }
];

function makeSentence(person) {
  return `${person.name} is ${person.age} years old`;
}

function peopleSentences(people) {
  return people.map(makeSentence);
}

let sentences = peopleSentences(people);
console.log(sentences); // ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']

// solving this problem: https://www.hackerrank.com/challenges/fp-update-list/problem

Math.abs(-1); // 1
Math.abs(1); // 1
Math.abs(-2); // 2
Math.abs(2); // 2

let values = [1, 2, 3, -4, 5];

function updateListMap(values) {
  return values.map(Math.abs);
}

let absoluteValues = updateListMap(values);
console.log(absoluteValues);
