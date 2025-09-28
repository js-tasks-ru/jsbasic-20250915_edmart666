function getMinMax(str) {
  // ваш код...
  let arrStr = str.split(" ");
  let max = 0;
  let min = 0;
  for (let i = 0; i < arrStr.length; i++) {
    if (!isNaN(+arrStr[i])) {
      max = Math.max(arrStr[i], max);
      min = Math.min(arrStr[i], min);
    }
  }

  return { min, max };
}
