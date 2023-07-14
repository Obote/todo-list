import './style.css';

document.addEventListener('DOMContentLoaded', function() {
  const tasks = [
    { description: 'Task 1', completed: false, index: 1 },
    { description: 'Task 2', completed: true, index: 2 },
    { description: 'Task 3', completed: false, index: 3 }
  ];

  function populateTaskList(tasks) {
    const todoList = document.getElementById('todo-list');

    tasks.sort((a, b) => a.index - b.index);

    tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.textContent = task.description;
      todoList.appendChild(listItem);
    });
  }

  populateTaskList(tasks);
});
