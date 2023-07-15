import './style.css';
import Display from './display.js';
import Todo from './todo.js';
import LocalStorage from './localstorage.js';

const display = new Display();

document.querySelector('.AddTaskBtn').addEventListener('click', (e) => {
  const listItem = document.getElementById('newTaskID').value;
  const item = new Todo(listItem);

  display.addToDisplay(item);
  display.resetForm();
});