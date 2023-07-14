const validateForm = () => {
  const tasks = JSON.parse(localStorage.getItem('datas')) ?? [];
  const task = document.getElementById('task-input');
  if (task && task.value !== '') {
    const newEntry = {
      index: tasks.length + 1,
      completed: false,
      description: task && task.value,
    };
    task.value = '';

    tasks.push(newEntry);
    localStorage.setItem('datas', JSON.stringify(tasks));

    return false;
  }

  return true;
};

export default validateForm;
