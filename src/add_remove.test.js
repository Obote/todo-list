import 'jest-localstorage-mock';
import Todo from './todo.js';
import LS from './localstorage.js';
// import {create} from './input.js';
describe('Mylist', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('2+1 should be 3', () => {
    expect(2 + 1).toBe(3);
  });
  test('Add data in index one of local storage', () => {
    const item = new Todo('one');
    const ls = new LS();
    ls.storeTodo(item);
    const lists = JSON.parse(localStorage.getItem('items'));
    if (lists.length > 0) {
      expect(lists[0].title).toBe('one');
      expect(lists[0].isComplete).toBe(false);
      expect(lists[0].id).toBe(new Date().toLocaleString());
    }
  });

  test('Add many data to local storage', () => {
    const item = new Todo('one');
    const item2 = new Todo('two');
    const item3 = new Todo('three');
    const ls = new LS();
    ls.storeTodo(item);
    ls.storeTodo(item2);
    ls.storeTodo(item3);
    const lists = JSON.parse(localStorage.getItem('items'));
    if (lists.length > 0) {
      expect(lists[0].title).toBe('three');
      expect(lists[0].isComplete).toBe(false);
      expect(lists[0].id).toBe(new Date().toLocaleString());
      expect(lists[1].title).toBe('two');
      expect(lists[1].isComplete).toBe(false);
      expect(lists[1].id).toBe(new Date().toLocaleString());
      expect(lists[2].title).toBe('one');
      expect(lists[2].isComplete).toBe(false);
      expect(lists[2].id).toBe(new Date().toLocaleString());
    }
  });
});
describe('Deleting data', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('Delte data from one index ', () => {
    const item = new Todo('one');
    const ls = new LS();
    ls.storeTodo(item);
    ls.deleteTodo(0);
    const lists = JSON.parse(localStorage.getItem('items'));
    expect(lists.length).toBe(0);
  });
  test('Delte many data', () => {
    const item = new Todo('one');
    const item2 = new Todo('two');
    const item3 = new Todo('three');
    const item4 = new Todo('three');
    const ls = new LS();
    ls.storeTodo(item);
    ls.storeTodo(item2);
    ls.storeTodo(item3);
    ls.storeTodo(item4);
    ls.deleteTodo(0);
    const lists = JSON.parse(localStorage.getItem('items'));
    expect(lists.length).toBe(3);
    ls.deleteTodo(3);
    const list2 = JSON.parse(localStorage.getItem('items'));
    expect(list2.length).toBe(2);
  });
});
