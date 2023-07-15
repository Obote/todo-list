import './style.css';
import Display from './display.js';
import Todo from './todo.js';

const display = new Display();

document.querySelector('.AddTaskBtn').addEventListener('click', (e) => {
  const listItem = document.getElementById('newTaskID').value;
  const item = new Todo(listItem);

  display.addToDisplay(item);
  display.resetForm();
});

document.querySelector('.taskList').addEventListener('click', (e) => {
  if (e.target.className.includes('taskIconDelete')) {
    display.deleteTask(e);
  }
});