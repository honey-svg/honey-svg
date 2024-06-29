// script.js
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput.value} <button class="delete" onclick="deleteTask(this)">Delete</button>`;
        li.addEventListener('click', () => {
            li.classList.toggle('done');
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
