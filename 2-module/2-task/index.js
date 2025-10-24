function isEmpty(obj) {
  // ваш код...
  for (let k in obj) {
    return false;
  }
  return true;
}
