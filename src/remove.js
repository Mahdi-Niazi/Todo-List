const deleteTask = (i) => {
  let tasks = JSON.parse(localStorage.getItem('datas'));
  tasks = tasks.filter((task) => task.description !== tasks[i].description);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });

  localStorage.setItem('datas', JSON.stringify(tasks));
  window.location.reload();
};

export default deleteTask;
