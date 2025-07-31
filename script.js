const todoList = document.querySelector(".todo-content");
todoList.innerHTML = "";
window.addEventListener("keydown", (event) => {
  const todo = document.querySelector(".todo-typing");
  if (event.key === "Enter") {
    todoList.innerHTML += `<div class="adding-todo-page">
              <div class="todo-check">
                <img src="./images/icon-check.svg" alt="check" />
              </div>
              <div class="todo-text-content">
                ${todo.value}
              </div>
              <img src="./images/icon-cross.svg" alt="delete" class="delete"/>
            </div>`;
    addDeleteListeners();
    itemsLeft();
    checkTodo();
    todo.value = "";
  }
});

function addDeleteListeners() {
  const remove = document.querySelectorAll(".delete");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", function () {
      remove[i].parentElement.remove();
      itemsLeft();
    });
  }
}

function itemsLeft() {
  const items = document.querySelectorAll(".adding-todo-page");
  const itemsLeftElem = document.querySelector(".items");
  if (items.length === 0) {
    itemsLeftElem.textContent = "No items left";
  } else {
    itemsLeftElem.textContent = `${items.length} items left`;
  }
}

function checkTodo() {
  const check = document.querySelectorAll(".todo-check");
  for (let i = 0; i < check.length; i++) {
    check[i].addEventListener("click", function () {
      check[i].classList.toggle("checked");
      crossed(check[i]);
    });
  }
}
function crossed(checkElem) {
  const todoTextContent =
    checkElem.parentElement.querySelector(".todo-text-content");
  if (todoTextContent) {
    todoTextContent.classList.toggle("crossed");
  }
}

const body = document.querySelector("body");
const moon = document.querySelector(".moon");
if (moon) {
  moon.addEventListener("click", () => {
    toggleDarkMode();
  });
}
function toggleDarkMode() {
  if (body) {
    body.classList.toggle("dark-mode");
  }
  const todoContent = document.querySelector(".todo-content");
  if (todoContent) {
    todoContent.classList.toggle("dark-mode");
  }
  const todoCheck = document.querySelectorAll(".todo-check");
  todoCheck.forEach((check) => {
    check.classList.toggle("dark-mode");
  });
  const todoTextContent = document.querySelectorAll(".todo-text-content");
  todoTextContent.forEach((text) => {
    text.classList.toggle("dark-mode");
  });
  const todoLink = document.querySelector(".todo-link");
  if (todoLink) {
    todoLink.classList.toggle("dark-mode");
  }
  const heading = document.querySelector(".heading");
  if (heading) {
    heading.classList.toggle("dark-mode");
  }
  const todoList = document.querySelector(".todo-lists");
  if (todoList) {
    todoList.classList.toggle("dark-mode");
  }
  const items = document.querySelectorAll(".adding-todo-page");
  items.forEach((item) => {
    item.classList.toggle("dark-mode");
  });
  const addingTodo = document.querySelector(".adding-todo");
  if (addingTodo) {
    addingTodo.classList.toggle("dark-mode");
  }
  const moon = document.querySelector(".moon");
  if (moon.src.includes("icon-moon.svg")) {
    moon.src = "./images/icon-sun.svg";
  } else {
    moon.src = "./images/icon-moon.svg";
  }
}
