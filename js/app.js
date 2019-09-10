

// EVENT LISTENERS

eventListeners();

function eventListeners(){

    document.querySelector('#btnAddTask').addEventListener('click', fAddTaskList);
    
    taskList.addEventListener('click', fDeleteTask);

    borrarTodo.addEventListener('click', fBorrarTodo);
}

// FUNCIONES
function fAddTaskList(e){

    let tarea = document.getElementById('txtTask').value;
    const obligatorio = document.getElementById('obligatorio');

    if(tarea == '' && obligatorio.classList.contains('ocultar')){

        obligatorio.classList.remove('ocultar');
        obligatorio.classList.add('mostrar');
        
        return;
    }

    if(tarea == '' && obligatorio.classList.contains('mostrar')){
        return;
    }


    if(tarea != '' && obligatorio.classList.contains('mostrar')){

        obligatorio.classList.remove('mostrar');
        obligatorio.classList.add('ocultar');

    }

    let sinEspacio = tarea.trim();

    const btnBorrar = document.createElement('a');
    
    btnBorrar.classList = "borrar-tarea";
    btnBorrar.innerText = "X";
    
    const div = document.createElement("div");

    let select = document.getElementById('prioridad').value;
    div.setAttribute("id", '1');

    if(select == "1"){
        div.classList = 'card mt-4 mb-0 p-2 pl-4 enlinea prioridadBaja';

    } else if (select == "2"){
        div.classList = 'card mt-4 mb-0 p-2 pl-4 enlinea prioridadMedia';

    } else {
        div.classList = 'card mt-4 mb-0 p-2 pl-4 enlinea prioridadAlta';
    }

    div.innerText = sinEspacio;
    div.appendChild(btnBorrar);
    taskList.appendChild(div);

    let ninguna = document.getElementById('ningunaTarea');

    ninguna.classList = "ocultar";

    document.getElementById('txtTask').value = '';

}


function fDeleteTask(e){
    
    let children = document.querySelectorAll('#taskList div');
    
    if(e.target.className === "borrar-tarea"){
        e.target.parentElement.remove();
        
        if(children.length === 1){
            
                let ninguna = document.getElementById('ningunaTarea');
                ninguna.classList = "text-center mt-4 mostrar";
            
            }
    }

}
 
function fBorrarTodo(){

    let children = document.querySelectorAll('#taskList div');

    children.forEach(function(child){

        child.parentNode.removeChild(child);

    });

    let ninguna = document.getElementById('ningunaTarea');
    ninguna.classList = "text-center mt-4 mostrar";

}

