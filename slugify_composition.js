let string = " I will be a url slug   ";

function slugify(string) {
  return string.toLowerCase()
    .trim()
    .split(" ")
    .join("-");
}

console.log(slugify(string));
