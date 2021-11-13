document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const input = document.querySelector("#new-task-description");
  const list = document.querySelector("#list");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newToDo = document.createElement("li");
    newToDo.innerHTML = `${ input.value } <button onclick="deleteTask(event)">x</button>`;
    list.append(newToDo);
    input.value = "";
  });


});

const deleteTask = (event) => {
  event.target.parentNode.remove();
};








