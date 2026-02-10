//=================================================
// Premenne
//==============================================

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

//=================================================
// Funkcie
//=================================================

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    let listItem = document.createElement('li');
    let listInput = document.createElement('input');
    let listSpan = document.createElement('span');
    let listBtn = document.createElement('button');

    listItem.className = 'task-item';

    listInput.type = 'checkbox';
    listInput.className = 'task-checkbox';

    listSpan.className = 'task-text';
    listSpan.textContent = taskText;

    listBtn.className = 'delete-button';
    listBtn.textContent = 'Zmazať';

    listInput.addEventListener('change', () => {
        listItem.classList.toggle('completed');
    });

    listBtn.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.appendChild(listInput);
    listItem.appendChild(listSpan);
    listItem.appendChild(listBtn);

    taskList.appendChild(listItem);

    taskInput.value = '';
});
