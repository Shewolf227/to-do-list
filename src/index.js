import './style.css';

const toDoItems = [
  {
    description: 'My first to do item',
    completed: true,
    id: 1,
  },
  {
    description: 'My second to do item',
    completed: false,
    id: 2,
  },
  {
    description: 'My third to do item',
    completed: true,
    id: 3,
  },
  {
    description: 'My fourth to do item',
    completed: false,
    id: 4,
  },
];

const toDoListContainer = document.getElementById('to-do-list');
const newItemField = '<input type="text" placeholder="Add to your list...">';
const submitButtonHtml = '<input type="button" value="Clear all completed">';
const newListItem = document.createElement('div');
const submitButton = document.createElement('div');
submitButton.innerHTML = submitButtonHtml;
newListItem.innerHTML = newItemField;
toDoListContainer.appendChild(newListItem);

toDoItems.forEach((el) => {
  const itemHTML = `<input type="checkbox" name=${el.id} value=${el.description}>
  <label for=${el.id}> ${el.description}</label><i class="material-icons more_vert">more_vert</i><br>`;
  const listItem = document.createElement('div');
  listItem.innerHTML = itemHTML;
  toDoListContainer.appendChild(listItem);
});

toDoListContainer.appendChild(submitButton);
