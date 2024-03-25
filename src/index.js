document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('task-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const inputField = document.getElementById('new-task-description');
    const taskDescription = inputField.value;

    if (taskDescription) {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;
      taskList.appendChild(taskItem);
      inputField.value = ''; // Clear input field after task is added
    }
  });
});
