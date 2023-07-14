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
      listItem.classList.add('list-item');

      const listDiv = document.createElement('div');
      listDiv.classList.add('list-div');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('check');
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          listItem.classList.add('completed');
        } else {
          listItem.classList.remove('completed');
        }
      });

      const description = document.createElement('p');
      description.textContent = task.description;

      const ellipsisIcon = document.createElement('i');
      ellipsisIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');

      listDiv.appendChild(checkbox);
      listDiv.appendChild(description);
      listItem.appendChild(listDiv);
      listItem.appendChild(ellipsisIcon);

      taskList.appendChild(listItem);
    });
  }

  populateTaskList(tasks);
});
