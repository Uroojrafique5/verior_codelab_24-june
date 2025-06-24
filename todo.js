let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li>${task}
        <button class="delete" onclick="deleteTask(${index})">❌</button>
      </li>`;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById('taskInput');
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    input.value = '';
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
