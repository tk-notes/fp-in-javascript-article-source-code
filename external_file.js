function charactersCounter(text) {
  return `Character count: ${text.length}`;
}

function analyzeFile(filename) {
  let fileContent = open(filename);
  return charactersCounter(fileContent);
}
