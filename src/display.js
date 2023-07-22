import { clearAllCompleted, updateTodoCompleteStatus } from './todoMethods.js';
import LS from './localstorage.js';

function Display() {}
const ls = new LS();

Display.prototype.showAllTodos = function () {
  const items = ls.fetchItem();
  let newHtml = '';
  items.forEach((itm) => {
    newHtml += `
    <div class="task ${itm.isComplete ? 'completed' : ''}" data-createdate="${itm.id}">
    <div class="taskDetails">
          <input type="checkbox" class="task-check" ${itm.isComplete ? 'checked' : ''} />
          <label class="taskTitle">${itm.title}</label>
    </div>

    <div class="taskIcon">
          <ion-icon class="taskIconEdit" name="create-outline"></ion-icon> 
          <ion-icon class="taskIconDelete" name="trash-outline"></ion-icon>
    </div> 
  </div>`;
  });
  document.querySelector('.taskList').innerHTML = newHtml;
};

Display.prototype.clearCompleted = function () {
  clearAllCompleted();
  this.showAllTodos();
};

Display.prototype.completeTodo = function (e) {
  const item = e.target.parentElement.parentElement;
  const id = item.dataset.createdate;
  const isComplete = item.classList.toggle('completed');
  updateTodoCompleteStatus(id, isComplete);
};

Display.prototype.addToDisplay = function (item) {
  ls.storeTodo(item);

  const newHTML = `
    <div class="task" data-createdate="${item.id}">
        <div class="taskDetails">
              <input type="checkbox" class="task-check" />
              <label class="taskTitle">${item.title}</label>
        </div>

        <div class="taskIcon">
              <ion-icon class="taskIconEdit" name="create-outline"></ion-icon>
              <ion-icon class="taskIconDelete" name="trash-outline"></ion-icon>
        </div>
    </div>
    `;

  document.querySelector('.taskList').insertAdjacentHTML('afterbegin', newHTML);
};

Display.prototype.resetForm = function () {
  document.querySelector('#newTaskID').value = '';
};

Display.prototype.deleteTodo = function (e) {
  const item = e.target.parentElement.parentElement;
  const id = item.dataset.createdate;
  ls.deleteTodo(id);
  item.remove();
};

Display.prototype.completeTodo = function (e) {
  const item = e.target.parentElement.parentElement;
  const id = item.dataset.createdate;
  ls.completeTodo(id);
  item.classList.toggle('completed');
};

Display.prototype.editTodo = function (e) {
  const item = e.target.parentElement.parentElement;
  const id = item.dataset.createdate;
  const data = ls.findItem(id);

  document.getElementById('newTaskID').value = data.title;
  document.getElementById('updateTaskId').value = data.id;

  document.querySelector('.AddTaskBtn').style.display = 'none';
  document.querySelector('.EditTaskBtn').style.display = 'inline';
  document.querySelector('.CancelTaskBtn').style.display = 'inline';
};

Display.prototype.updateTodo = function () {
  const todoId = document.getElementById('updateTaskId').value;
  const todoTile = document.getElementById('newTaskID').value;
  const items = document.querySelectorAll('.taskTitle');

  if (todoTile.length > 0) {
    ls.updateTodo(todoId, todoTile);
    items.forEach((title) => {
      if (title.parentElement.parentElement.dataset.createdate === todoId) {
        title.innerText = todoTile;
      }
    });
  }

  document.getElementById('newTaskID').value = '';
  document.getElementById('updateTaskId').value = '';

  document.querySelector('.AddTaskBtn').style.display = 'inline';
  document.querySelector('.EditTaskBtn').style.display = 'none';
  document.querySelector('.CancelTaskBtn').style.display = 'none';
};

Display.prototype.cancelTodo = function () {
  document.getElementById('newTaskID').value = '';
  document.getElementById('updateTaskId').value = '';

  document.querySelector('.AddTaskBtn').style.display = 'inline';
  document.querySelector('.EditTaskBtn').style.display = 'none';
  document.querySelector('.CancelTaskBtn').style.display = 'none';
};

export default Display;