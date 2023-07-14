const validateForm = () => {
  const lists = JSON.parse(localStorage.getItem('tasks')) ?? [];
  const task = document.getElementById('task-input');
  if (lists && task.value !== '') {
    const newEntry = {
      index: lists.length,
      completed: false,
      description: lists && task.value,
    };
    task.value = '';

    lists.push(newEntry);
    localStorage.setItem('tasks', JSON.stringify(lists));

    return false;
  }

  return true;
};

export default validateForm;