function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  let result = 1;

  while (n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
}
