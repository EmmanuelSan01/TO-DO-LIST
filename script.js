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
  const deleteButton = document.createElement("button");
  const doneButton = document.createElement("button");
  const buttonContainer = document.createElement("div");

  listItem.textContent = task;
  doneButton.textContent = String.fromCodePoint(0x2714);
  doneButton.id = "done";
  deleteButton.textContent = String.fromCodePoint(0x2716);
  deleteButton.id = "delete";
  buttonContainer.appendChild(doneButton);
  buttonContainer.appendChild(deleteButton);
  listItem.appendChild(buttonContainer);
  list.appendChild(listItem);

  deleteButton.addEventListener("click", function () {
    list.removeChild(listItem);
    saveTasks();
  });
}

function saveTasks() {
  let tasks = [];

  list.querySelectorAll("li").forEach(function (item) {
    const taskText = item.childNodes[0].textContent;
    tasks.push(taskText.trim());
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(createTaskElement);
}