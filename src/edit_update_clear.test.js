import 'jest-localstorage-mock';
import Todo from './todo.js';
import LS from './localstorage.js';
import Display from './display.js';


describe('Editing data', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test('2+1 should be 3', () => {
    expect(2 + 1).toBe(3);
  });

  test('Edit one item', () => {
    //const event = new KeyboardEvent('keypress', { key: 'Enter' });
//      const con = document.createElement('input');
//      const con2 = document.createElement('input');
//     // con.className='newTaskID';
//      con2.className="updateTaskId";
//      con.className = 'newTaskID';
//      document.body.appendChild(con2);
//      document.body.appendChild(con);
//      con.value=" ";
//      con2.value=" ";

//      const display = new Display();

// const item = new Todo('one');
// const container = document.querySelector('.container');
// const ls = new LS();
// ls.storeTodo(item);
//   const data= display.editdata("two",1);
//     const lists = JSON.parse(localStorage.getItem('items')); 
let ls = new LS();
const display = new Display();
const item = new Todo('one');
item.id="29/07/2023, 09:05:01";
ls.storeTodo(item);
ls.updateTodo("29/07/2023, 09:05:01","editOne");
const lists = JSON.parse(localStorage.getItem('items'));
expect(lists[0].title).toBe('editOne');
  });

  test('Edit more than one item', () => {
let ls = new LS();
const display = new Display();
const item = new Todo('one');
const item2 = new Todo('two');
const item3 = new Todo('three');
item.id="29/07/2023, 09:05:01";
item2.id="29/07/2023, 09:38:33";
item3.id="29/07/2023, 09:49:22";
ls.storeTodo(item);
ls.storeTodo(item2);
ls.storeTodo(item3);
ls.updateTodo("29/07/2023, 09:05:01","editThree");
ls.updateTodo("29/07/2023, 09:38:33","editTwo");
ls.updateTodo("29/07/2023, 09:49:22","editOne");
const lists = JSON.parse(localStorage.getItem('items'));

expect(lists[2].title).toBe('editThree');
expect(lists[1].title).toBe('editTwo');
expect(lists[0].title).toBe('editOne');
  })

})

describe('Editing data', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test('2+1 should be 3', () => {
    expect(2 + 1).toBe(3);
  });

  test('Edit one item', () => {

  let ls = new LS();
  const display = new Display();
  const item = new Todo('one');
  item.id="29/07/2023, 09:05:01";
  ls.storeTodo(item);
  ls.updateTodo("29/07/2023, 09:05:01","editOne");
 const lists = JSON.parse(localStorage.getItem('items'));
  expect(lists[0].title).toBe('editOne');
  });

  test('test for completement', () => {
let ls = new LS();
const display = new Display();
const item = new Todo('one');
const item2 = new Todo('two');
const item3 = new Todo('three');
item.id="29/07/2023, 09:05:01";
item2.id="29/07/2023, 09:38:33";
item3.id="29/07/2023, 09:49:22";
ls.storeTodo(item);
ls.storeTodo(item2);
ls.storeTodo(item3);
ls.completeTodo(item.id);
const lists = JSON.parse(localStorage.getItem('items'));

expect(lists[2].isComplete).toBe(true);
  })

})
