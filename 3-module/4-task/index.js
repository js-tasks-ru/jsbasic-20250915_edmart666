function showSalary(users, age) {
  // ваш код...
  let result = "";
  for (i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      let userDate = users[i].name + ", " + users[i].balance + "\n";

      result += userDate;
    }
  }
  return result.slice(0, result.length - 1);
}
