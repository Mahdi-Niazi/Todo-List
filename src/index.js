import './style.css';

const tasks = [
  {
    completed: false,
    description: 'Anything',
    index: 0,
  },
  {
    completed: false,
    description: 'something',
    index: 1,
  },
  {
    completed: false,
    description: 'everyting',
    index: 3,
  },
];

const mainList = document.querySelector('.items');

const ul = document.createElement('ul');

mainList.appendChild(ul);

const showTask = (i) => {
  const li = document.createElement('li');
  li.classList.add('inside-list');
  li.innerHTML = `<div class='items-contents'> <input type='checkbox'><p class='txt'>${
    tasks[i].description
  }</p> </div><i class='fa-solid fa-ellipsis-vertical'></i>`;

  ul.appendChild(li);
};
tasks.forEach((counter, x) => {
  showTask(x);
});
