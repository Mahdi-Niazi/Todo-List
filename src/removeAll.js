const removeAllTask = () => {
  let tasks = JSON.parse(localStorage.getItem('datas'));

  tasks = tasks.filter((task) => !task.completed);

  tasks.forEach((task, i) => {
    task.index = i;
  });

  localStorage.setItem('datas', JSON.stringify(tasks));
  window.location.reload();
};

export default removeAllTask;
