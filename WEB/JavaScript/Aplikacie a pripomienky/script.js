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
});

if (!taskText) return;

let listItem = document.createElement('li');