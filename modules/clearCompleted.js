/* eslint-disable no-restricted-globals */
import { createList } from './createTask.js';

export default (items) => {
  const checkedTasks = [];
  const deleteButton = document.getElementById('delete');
  deleteButton.addEventListener('click', () => {
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].completed === true) {
        checkedTasks.push(items[i]);
      }
    }
    items = items.filter((x) => !checkedTasks.includes(x));
    let i = 1;
    items.forEach((task) => {
      task.index = i;
      i += 1;
    });
    localStorage.todos = JSON.stringify(items);
    createList(items);
    location.reload();
  });
};
