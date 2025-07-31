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

