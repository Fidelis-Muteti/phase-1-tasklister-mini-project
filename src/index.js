document.addEventListener("DOMContentLoaded", () => {
let myform = document.getElementById("create-task-form");

myform.addEventListener("submit",(e) => {
e.preventDefault()


let item = document.getElementById("new-task-description").value;

let ulist = document.getElementById("tasks");
let listItem = document.createElement("li");
listItem.textContent = item;

ulist.appendChild(listItem)

document.getElementById('new-task-description').value = '';


  });
});


