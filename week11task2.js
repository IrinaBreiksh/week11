
const listInput = document.getElementById('list');
const button = document.getElementById('button');
const taskList = document.getElementById('task-list');

function createTask() {
    const taskText = listInput.value;
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.append(newTask);
    listInput.value = '';
}

button.addEventListener('click', createTask);

function checkTask(evt) {
    if (evt.target.tagName==='LI'){
        evt.target.classList.toggle('crossed');
    }
}

taskList.addEventListener('mousedown', checkTask);


