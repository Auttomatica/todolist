

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

    if(tarea == '' ){
        return alert('escribi algo, no te hagas el picaro');
    }

    let sinEspacio = tarea.trim();

    const btnBorrar = document.createElement('a'); 
    btnBorrar.classList = "borrar-tarea";
    btnBorrar.innerText = "X";
    
    const div = document.createElement("div");

    div.setAttribute("id", '1');
    div.classList = 'card mt-4 mb-0 p-2 pl-4 enlinea';
    div.innerText = sinEspacio;
    div.appendChild(btnBorrar);
    taskList.appendChild(div);

    let ninguna = document.getElementById('ningunaTarea');

    ninguna.classList = "ocultar";

    document.getElementById('txtTask').value = '';

}


function fDeleteTask(e){
    

    if(e.target.className === "borrar-tarea"){
        e.target.parentElement.remove();

        
    }



}
 
function fBorrarTodo(){

    var children = document.querySelectorAll('#taskList div');

    console.log(children);

    children.forEach(function(child){

        child.parentNode.removeChild(child);

    });

    let ninguna = document.getElementById('ningunaTarea');
    ninguna.classList = "text-center mt-4 mostrar";


}