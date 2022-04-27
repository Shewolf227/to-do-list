import { createList } from './createTask.js';

export const addItem = (items) => {
  const addNewInput = document.getElementById('add-item');
  addNewInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
      const newItem = {
        description: addNewInput.value,
        completed: false,
        index: items.length + 1,
      };
      items.push(newItem);
      createList(items);
      addNewInput.value = '';
      localStorage.todos = JSON.stringify(items);
    }
  });
};
