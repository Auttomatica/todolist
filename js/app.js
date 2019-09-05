

// EVENT LISTENERS

eventListeners();

function eventListeners(){

    document.querySelector('#btnAddTask').addEventListener('click', fAddTaskList);
    
    taskList.addEventListener('click', fDeleteTask);

    
}




// FUNCIONES
function fAddTaskList(e){

    let tarea = document.getElementById('txtTask').value;

    if(tarea == '' ){
        return alert('escribi algo, no te hagas el picaro');
    }

    let sinEspacio = tarea.trim();

    const btnBorrar = document.createElement('a'); 
    btnBorrar.classList = "borrar-tarea";
    btnBorrar.innerText = "X";
    
    const div = document.createElement("div");
    div.classList = 'card mt-4 mb-0 p-2 pl-4 enlinea';
    div.innerText = sinEspacio;
    div.appendChild(btnBorrar);
    taskList.appendChild(div);

    const ninguna = document.getElementById('ningunaTarea');

    ninguna.classList = "ocultar";

    document.getElementById('txtTask').value = '';

}


function fDeleteTask(e){
    

    if(e.target.className === "borrar-tarea"){
        e.target.parentElement.remove();

    }



}