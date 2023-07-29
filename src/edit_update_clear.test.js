import 'jest-localstorage-mock';
import Todo from './todo.js';
import LS from './localstorage.js';

describe('Editing data', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Edit one item', () => {
    const ls = new LS();
    const item = new Todo('one');
    item.id = '29/07/2023, 09:05:01';
    ls.storeTodo(item);
    ls.updateTodo('29/07/2023, 09:05:01', 'editOne');
    const lists = JSON.parse(localStorage.getItem('items'));
    expect(lists[0].title).toBe('editOne');
  });

  test('Edit more than one item', () => {
    const ls = new LS();
    const item = new Todo('one');
    const item2 = new Todo('two');
    const item3 = new Todo('three');
    item.id = '29/07/2023, 09:05:01';
    item2.id = '29/07/2023, 09:38:33';
    item3.id = '29/07/2023, 09:49:22';
    ls.storeTodo(item);
    ls.storeTodo(item2);
    ls.storeTodo(item3);
    ls.updateTodo('29/07/2023, 09:05:01', 'editThree');
    ls.updateTodo('29/07/2023, 09:38:33', 'editTwo');
    ls.updateTodo('29/07/2023, 09:49:22', 'editOne');
    const lists = JSON.parse(localStorage.getItem('items'));

    expect(lists[2].title).toBe('editThree');
    expect(lists[1].title).toBe('editTwo');
    expect(lists[0].title).toBe('editOne');
  });
});

describe('Updating data', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Upadate the data', () => {
    const ls = new LS();
    const item = new Todo('one');
    item.id = '29/07/2023, 09:05:01';
    ls.storeTodo(item);
    ls.updateTodo('29/07/2023, 09:05:01', 'editOne');
    const lists = JSON.parse(localStorage.getItem('items'));
    expect(lists[0].title).toBe('editOne');
  });

  test('test for completement', () => {
    const ls = new LS();
    const item = new Todo('one');
    const item2 = new Todo('two');
    const item3 = new Todo('three');
    item.id = '29/07/2023, 09:05:01';
    item2.id = '29/07/2023, 09:38:33';
    item3.id = '29/07/2023, 09:49:22';
    ls.storeTodo(item);
    ls.storeTodo(item2);
    ls.storeTodo(item3);
    ls.completeTodo(item.id);
    const lists = JSON.parse(localStorage.getItem('items'));

    expect(lists[2].isComplete).toBe(true);
  });
});

describe('Clear all completed function', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Clear all completed function for one completed test', () => {
    const ls = new LS();
    const item = new Todo('one');
    const item2 = new Todo('two');
    const item3 = new Todo('three');
    item.isComplete = true;
    ls.storeTodo(item);
    ls.storeTodo(item2);
    ls.storeTodo(item3);
    // test clear all funtion.
    const items = ls.fetchItem();
    const updatedItems = items.filter((item) => !item.isComplete);
    ls.saveItems(updatedItems);
    const lists = JSON.parse(localStorage.getItem('items'));
    expect(lists.length).toBe(2);
  });

  test('Clear all completed function for all completed tasks test', () => {
    const ls = new LS();
    const item = new Todo('one');
    const item2 = new Todo('two');
    const item3 = new Todo('three');
    item.isComplete = true;
    item2.isComplete = true;
    item3.isComplete = true;
    ls.storeTodo(item);
    ls.storeTodo(item2);
    ls.storeTodo(item3);
    // test clear all funtion.
    const items = ls.fetchItem();
    const updatedItems = items.filter((item) => !item.isComplete);
    ls.saveItems(updatedItems);
    const lists = JSON.parse(localStorage.getItem('items'));
    expect(lists.length).toBe(0);
  });
});
