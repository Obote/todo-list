function Todo(title) {
  this.id = new Date().toLocaleString();
  this.title = title;
  this.isComplete = fasle;
}

export default Todo;