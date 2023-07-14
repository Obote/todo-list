import './style.css';

document.addEventListener('DOMContentLoaded', function() {
  const tasks = [
    { description: 'Task 1', completed: false, index: 1 },
    { description: 'Task 2', completed: true, index: 2 },
    { description: 'Task 3', completed: false, index: 3 }
  ];

  function populateTaskList(tasks) {
    const taskList = document.getElementById('tasks');

    tasks.sort((a, b) => a.index - b.index);

    tasks.forEach(task => {
      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          listItem.classList.add('completed');
        } else {
          listItem.classList.remove('completed');
        }
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(document.createTextNode(task.description));
      taskList.appendChild(listItem);
    });
  }

  populateTaskList(tasks);
});
