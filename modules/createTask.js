import remove from './delete.js';
import checker from './completedTasks.js';
import change from './editTask.js';

const check = (a, b) => {
  if (a.index < b.index) {
    return -1;
  }
  if (a.index > b.index) {
    return 1;
  }
  return 0;
};

export const createList = (items) => {
  items.sort(check);
  let editedTasks = '';
  items.forEach((item) => {
    let checked = '';
    if (item.completed) {
      checked = ' checked';
    }
    
    editedTasks += `<div class="item${checked}"><input class="checkbox" value="${item.index}" type="checkbox"${checked}><input class="item-desc" title="Click task to edit it" type="text" value="${item.description}"><i class="material-icons delete"  title="Delete">delete</i></div>`;
  });
  const list = document.getElementById('to-do-list');
  list.innerHTML = editedTasks;
  checker(items);
  change(items);
  remove(items);
};