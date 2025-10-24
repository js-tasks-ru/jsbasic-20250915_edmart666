/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.arrData = rows;
  }

  createTable() {
    let tableData = document.createElement("table");

    tableData.append(this.createHead());
    tableData.append(this.createBody());

    tableData.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        let tr = event.target.closest("tr");
        if (tr) {
          tr.remove();
        }
      }
    });

    this.result = tableData;
  }
  get elem() {
    if (!this.result) {
      this.createTable();
    }
    return this.result;
  }
  createHead() {
    let head = document.createElement("thead");
    head.innerHTML = `<thead>
        <tr>
           <th>Имя</th>
           <th>Возраст</th>
           <th>Зарплата</th>
           <th>Город</th>
           <th></th>
        </tr>
        </thead>`;
    return head;
  }

  createBody() {
    let eBody = document.createElement("tbody");

    for (let row of this.arrData) {
      let element = document.createElement("tr");
      element.innerHTML = `<td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.salary}</td>
      <td>${row.city}</td>
      <td><button>X</button></td>`;
      eBody.append(element);
    }
    return eBody;
  }
}
