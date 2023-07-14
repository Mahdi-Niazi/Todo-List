import "./style.css";

import validateForm from "./functions.js";
import deleteTask from "./remove.js";

let tasks = [];

export const mainList = document.querySelector(".items");

const dataLoading = () => {
  tasks = JSON.parse(localStorage.getItem("datas")) ?? [];
};
export default dataLoading;

const ul = document.createElement("ul");

mainList.appendChild(ul);

const showTask = (i) => {
  const li = document.createElement("li");
  li.classList.add("inside-list");
  li.innerHTML = `<div class='items-contents'> <input type='checkbox'><p class='txt'>${tasks[i].description}</p> </div><i class='fa-solid fa-ellipsis-vertical icon'></i>`;

  ul.appendChild(li);
  const icon = document.querySelector(".icon");
  icon.addEventListener("click", () => {
    deleteTask(i);
    dataLoading();
  });
};

function component() {
  const form = document.querySelector("#taskForm");
  form.addEventListener("submit", () => {
    validateForm();
    dataLoading();
  });

  const inputSubmit = document.createElement("input");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.classList.add("btn-submit");
  inputSubmit.setAttribute("value", ">");

  form.appendChild(inputSubmit);

  tasks.forEach((counter, x) => {
    showTask(x);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  dataLoading();
  component();
});
