import './style.css';
import Display from './display.js';
import Todo from './todo.js';

const display = new Display();

display.showAllTodos();

document.querySelector('.AddTaskBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const listItem = document.getElementById('newTaskID').value;

  if (listItem.length > 0) {
    const item = new Todo(listItem);
    display.addToDisplay(item);
    display.resetForm();
  }
});

document.querySelector('.taskList').addEventListener('click', (e) => {
  if (e.target.className.includes('taskIconDelete')) {
    display.deleteTodo(e);
  }
  if (e.target.className.includes('task-check')) {
    display.completeTodo(e);
  }
});