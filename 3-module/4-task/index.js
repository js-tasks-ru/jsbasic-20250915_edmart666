function showSalary(users, age) {
  // ваш код...
  let result = "";
  for (i = 0; i < users.length; i++) {
    console.log(users[i].age <= age);
    if (users[i].age <= age) {
      let userDate = users[i].name + ", " + users[i].balance + "\n";
      console.log(userDate);
      result += userDate;
    }
  }
  return result.slice(0, result.length - 1);
}
