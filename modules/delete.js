import { createList } from './createTask.js';

export default (items) => {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      items.splice(index, 1);
      items.forEach((item, i) => {
        item.index = (i + 1);
      });
      localStorage.todos = JSON.stringify(items);
      createList(items);
    });
  });
};
