const deleteTask = (i) => {
  let tasks = JSON.parse(localStorage.getItem('datas'));
  tasks = tasks.filter((task) => task.description !== tasks[i].description);
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = 1;
  }
  localStorage.setItem('datas', JSON.stringify(tasks));
};

export default deleteTask;
