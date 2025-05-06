const arrayLis = [];

function renderToDo() {
  let toDoList = "";
  for (let i = 0; i < arrayLis.length; i++) {
    const itemObj = arrayLis[i];
    const { name, dueDate } = itemObj;
    const list = `
      <div class="col-md-5">${name}</div>
      <div class="col-md-4">${dueDate}</div>
      <div class="col-md-3">
        <button class="btn btn-danger w-100" onclick="arrayLis.splice(${i}, 1); renderToDo();">Delete</button>
      </div>
    `;
    toDoList += list;
  }
  document.querySelector(".js-to-do-list").innerHTML = toDoList;
}

function submit() {
  const inputName = document.querySelector('.js-toDo');
  const inputDate = document.querySelector('.js-date');
  const name = inputName.value.trim();
  const dueDate = inputDate.value;

  if (name !== "") {
    arrayLis.push({ name, dueDate });
    inputName.value = "";
    inputDate.value = "";
    renderToDo();
  }
}

function handleKey(event) {
  if (event.key === "Enter") {
    submit();
  }
}

document.querySelector('.js-toDo').addEventListener('keydown', handleKey);
