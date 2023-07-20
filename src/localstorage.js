function LS() {}
LS.prototype.fetchItem = function () {
  let items = localStorage.getItem('items');
  if (items) {
    items = JSON.parse(items);
  } else {
    items = [];
  }
  return items;
};

LS.prototype.storeItem = function (item) {
  const items = this.fetchItem();
  items.unshift(item);
  localStorage.setItem('items', JSON.stringify(items));
};

LS.prototype.deleteTask = function (id) {
  const items = this.fetchItem();
  const index = items.findIndex((item) => item.id === id);
  items.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items));
};

export default LS;