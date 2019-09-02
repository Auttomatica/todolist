

// EVENT LISTENERS

eventListeners();

function eventListeners(){

    document.querySelector('#btnAddTask').addEventListener('click', fAddTaskList);
    
    taskList.addEventListener('click', fDeleteTask);
}




// FUNCIONES
function fAddTaskList(e){

    const tarea = document.getElementById('txtTask').value;

    const btnBorrar = document.createElement('a');
    btnBorrar.classList = "borrar-tarea";
    btnBorrar.innerText = "X";
    
    const li = document.createElement("li");
    li.innerText = tarea;
    li.appendChild(btnBorrar);
    taskList.appendChild(li);
}


function fDeleteTask(e){
    

    if(e.target.className === "borrar-tarea"){
        e.target.parentElement.remove();
        
    }



}