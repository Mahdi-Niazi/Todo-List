import './style.css';

import validateForm from './functions.js';
import deleteTask from './remove.js';

let tasks = [];

export const mainList = document.querySelector('.items');

const dataLoading = () => {
  tasks = JSON.parse(localStorage.getItem('datas')) ?? [];
};
export default dataLoading;

const ul = document.createElement('ul');

mainList.appendChild(ul);

const showTask = (i) => {
  const li = document.createElement('li');
  li.classList.add('inside-list');

  const div = document.createElement('div');
  div.classList.add('items-contents');
  li.appendChild(div);

  const chk = document.createElement('input');
  chk.setAttribute('type', 'checkbox');
  div.appendChild(chk);

  const paragraph = document.createElement('input');
  paragraph.setAttribute('type', 'text');
  paragraph.setAttribute('id', 'taskField');
  paragraph.classList.add('taskField');
  paragraph.setAttribute('value', tasks[i].description);
  paragraph.addEventListener('change', () => {
    tasks[i].description = paragraph.value;
    localStorage.setItem('datas', JSON.stringify(tasks));
    dataLoading();
  });
  div.appendChild(paragraph);

  const di = document.createElement('i');
  di.classList.add('fa-solid', 'fa-ellipsis-vertical', 'icon');
  di.addEventListener('click', () => {
    deleteTask(i);
    dataLoading();
  });
  li.appendChild(di);

  ul.appendChild(li);
  // const icon = document.querySelector(".icon");
  // icon.addEventListener("click", () => {
  //   deleteTask(i);
  //   dataLoading();
  // });
};

function component() {
  const form = document.querySelector('#taskForm');
  form.addEventListener('submit', () => {
    validateForm();
    dataLoading();
  });

  const inputSubmit = document.createElement('input');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.classList.add('btn-submit');
  inputSubmit.setAttribute('value', '>');

  form.appendChild(inputSubmit);

  tasks.forEach((counter, x) => {
    showTask(x);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  dataLoading();
  component();
});
