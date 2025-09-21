function checkSpam(str) {
  // ваш код...
  const strToLowerCase = str.toLowerCase();
  const badWordBet = "1xBet".toLocaleLowerCase();
  const bawWordX = "XXX".toLocaleLowerCase();

  if (
    strToLowerCase.includes(badWordBet) ||
    strToLowerCase.includes(bawWordX)
  ) {
    return true;
  }
  return false;
}
