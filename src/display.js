function Display() {
  Display.prototype.addToDisplay = function (item) {
    const newHTML = `
    <div class="task" data-createdat="${item.id}">
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
}

export default Display;