function ucFirst(str) {
  // ваш код...
  if (typeof str !== 'string') {
    return;
  }

  if (str.length === 1 || str === '') {
    return str.toUpperCase();
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}
