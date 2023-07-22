import LS from './localstorage.js';

const ls = new LS();

function clearAllCompleted() {
  const items = ls.fetchItem();
  const updatedItems = items.filter((itm) => !itm.isComplete);
  ls.saveItems(updatedItems);
}

function updateTodoCompleteStatus(id, isComplete) {
  const items = ls.fetchItem();
  const updatedItems = items.map((itm) => {
    if (itm.id === id) {
      return { ...itm, isComplete };
    }
    return itm;
  });
  ls.saveItems(updatedItems);
}

export { clearAllCompleted, updateTodoCompleteStatus };
