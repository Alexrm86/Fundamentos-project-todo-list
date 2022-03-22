const createTaskButton = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');

createTaskButton.addEventListener('click', () => {
    const taskText = document.querySelector('#texto-tarefa');
    const newTask = document.createElement('li');
    newTask.innerText = taskText.value;
    newTask.className = 'task';
    toDoList.appendChild(newTask);
    taskText.value = '';
});


toDoList.addEventListener('click', (event) => {
    const grayLi = document.querySelector('.gray');
    if (grayLi == null) {
        event.target.classList.add('gray');
    } else {
        grayLi.classList.remove('gray');
        event.target.classList.add('gray');
    }
});


toDoList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
});


const eraseAllButton = document.querySelector('#apaga-tudo');

eraseAllButton.addEventListener('click', () => {
    toDoList.innerHTML = '';
});

const removeFinishedButton = document.querySelector('#remover-finalizados');

removeFinishedButton.addEventListener('click', () => {
    const completed = document.querySelectorAll('.completed');
    for (let i = 0; i < completed.length; i += 1) {
        toDoList.removeChild(completed[i]);
    }
});


const saveTasksButton = document.querySelector('#salvar-tarefas');

saveTasksButton.addEventListener('click', () => {
    const li = document.querySelectorAll('.task');
    const tasks = [];
    const classTasks = [];
    for (let i = 0; i < li.length; i += 1) {
        tasks.push(li[i].innerText);
        classTasks.push(li[i].className);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('classTasks', JSON.stringify(classTasks));
});

window.onload = () => {
    const retrieveTasks = JSON.parse(localStorage.getItem('tasks'));
    const retrieveClassTasks = JSON.parse(localStorage.getItem('classTasks'));
    if (retrieveTasks !== null) {
        for (let i = 0; i < retrieveTasks.length; i += 1) {
            const newTask = document.createElement('li');
            newTask.innerText = retrieveTasks[i];
            newTask.className = retrieveClassTasks[i];
            toDoList.appendChild(newTask);
        }
    }
};

const moveUpButton = document.querySelector('#mover-cima');

moveUpButton.addEventListener('click', () => {
    const grayLi = document.querySelector('.gray');
    if (grayLi !== null) {
        const previousTask = grayLi.previousElementSibling;
        if (previousTask !== null) {
            const transition1 = grayLi.innerText;
            const transition2 = previousTask.innerText;
            grayLi.innerText = transition2;
            previousTask.innerText = transition1;
            const transition3 = grayLi.className;
            const transition4 = previousTask.className;
            grayLi.className = transition4;
            previousTask.className = transition3;
        }
    }
});

const moveDownButton = document.querySelector('#mover-baixo');

moveDownButton.addEventListener('click', () => {
    const grayLi = document.querySelector('.gray');
    if (grayLi !== null) {
        const previousTask = grayLi.nextElementSibling;
        if (previousTask !== null) {
            const transition1 = grayLi.innerText;
            const transition2 = previousTask.innerText;
            grayLi.innerText = transition2;
            previousTask.innerText = transition1;
            const transition3 = grayLi.className;
            const transition4 = previousTask.className;
            grayLi.className = transition4;
            previousTask.className = transition3;
        }
    }
});


const removeSelected = document.querySelector('#remover-selecionado');

removeSelected.addEventListener('click', () => {
    const grayLi = document.querySelector('.gray');
    toDoList.removeChild(grayLi);
});