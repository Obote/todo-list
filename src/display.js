import LS from './localstorage.js';

function Display() {}
const ls = new LS();

Display.prototype.addToDisplay = function (item) {
  ls.storeItem(item);

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
  document.getElementById('newTaskID').value = '';
};

Display.prototype.deleteTask = function (e) {
  const item = e.target.parentElement.parentElement;
  const id = item.dataset.createdate;
  ls.deleteTask(id);
  item.remove();
};

export default Display;