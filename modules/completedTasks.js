const checkBox = (index, items) => {
  items[index].completed = !items[index].completed;
  localStorage.todos = JSON.stringify(items);
};

export default (items) => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      checkBox(index, items);
    });
  });
};
