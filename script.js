
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Ju lutem shkruani një detyrë!');
        return;
    }


    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Fshi';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };


    li.appendChild(deleteBtn);


    taskList.appendChild(li);


    taskInput.value = '';
}


taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});