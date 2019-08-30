
eventListeners();

function eventListeners(){

    document.querySelector('#btnAddTask').addEventListener('click', fAddTaskList);
    
}


function fAddTaskList(){

    const tarea = document.getElementById('txtTask').value;

    console.log(tarea);

}