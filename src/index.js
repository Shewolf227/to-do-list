import './style.css';
import { createList } from '../modules/createTask.js';
import { addItem } from '../modules/add.js';

let tasks = [];

const getLocalStorageData = () => {
  if (localStorage.getItem('todos')) {
    tasks = JSON.parse(localStorage.todos);
  }
};

getLocalStorageData();
createList(tasks);
addItem(tasks);
