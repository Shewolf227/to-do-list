export default (items) => {
  const descrips = document.querySelectorAll('.item-desc');
  descrips.forEach((task, index) => {
    task.addEventListener('input', () => {
      items[index].description = task.value;
      localStorage.todos = JSON.stringify(items);
    });
  });
};
