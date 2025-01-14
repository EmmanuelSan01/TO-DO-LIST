const add = document.getElementById("add");
const input = document.getElementById("input");
const list = document.getElementById("list");

loadTasks();

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});

function addTask() {
  const task = input.value.trim();

  if (task) {
    createTaskElement(task);
    input.value = "";
    saveTasks();
  } else {
    alert("Agregue una descripción");
  }
}

add.addEventListener("click", addTask);

function createTaskElement(task) {
  const listItem = document.createElement("li");
  const taskText = document.createElement("p");
  const buttonContainer = document.createElement("div");
  const doneButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  taskText.textContent = task;
  listItem.appendChild(taskText);

  function showButtons () {
    doneButton.textContent = String.fromCodePoint(0x2714);
    doneButton.className = "button";
    deleteButton.textContent = String.fromCodePoint(0x2716);
    deleteButton.className = "button";
    deleteButton.id = "delete";
    listItem.appendChild(buttonContainer);
    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(deleteButton);
  }

  list.appendChild(listItem);
  showButtons();

  deleteButton.addEventListener("click", function () {
    list.removeChild(listItem);
    saveTasks();
  });

  doneButton.addEventListener("click", function () {
    taskText.classList.toggle("doneText");
    listItem.classList.toggle("doneColor");
    showButtons();
    saveTasks();
  });
}

function saveTasks() {
  let tasks = [];

  list.querySelectorAll("li").forEach(function (item) {
    const taskText = item.childNodes[0].textContent;
    tasks.push(taskText);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(createTaskElement);
  console.log(tasks);
}