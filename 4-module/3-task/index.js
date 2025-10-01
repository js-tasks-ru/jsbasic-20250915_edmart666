const ageIndex = 1;
const genderIndex = 2;
const statusIndex = 3;


function highlight(table) {
  // ваш код...
  let bodyTable = table.tBodies[0];
  for (row of bodyTable.rows) {
    // вложенные циклы это плохо, но я не знаю как еще сделать эту задачу более элегантно
    // html колеекции не имеют методов ни map, ни foreach
    for (let cell of row.cells) {
      if (cell.cellIndex === ageIndex && cell.textContent < 18) {
        row.style = "text-decoration: line-through";
      }

      if (cell.cellIndex === genderIndex && cell.textContent === "m") {
        row.classList.add("male");
      } else if (cell.cellIndex === genderIndex && cell.textContent === "f") {
        row.classList.add("female");
      }

      if (cell.cellIndex === statusIndex && cell.dataset.available === "true") {
        row.classList.add("available");
      } else if (cell.cellIndex === statusIndex && cell.dataset.available === "false") {
        row.classList.add("unavailable");
      } else if (cell.cellIndex === statusIndex && cell.dataset.available === undefined) {
        row.setAttribute("hidden", "true");
      }
    }
  }
}
