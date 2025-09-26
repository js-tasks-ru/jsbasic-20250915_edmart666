function camelize(str) {
  // ваш код...
  let arr = str.split("-");
  let firstWord = arr.splice(0, 1);
  let result = arr.map((x) => (x = x[0].toUpperCase() + x.slice(1)));
  return firstWord.join() + result.join("");
}
