

const profile = document.getElementById('profile');
const contact =document.getElementById('contact');
// EVENT LISTENERS

eventListeners();

function eventListeners() {

    document.addEventListener('DOMContentLoaded', inicioApp);
    

    document.querySelector('#btnAddTask').addEventListener('click', fAddTaskList);

    taskList.addEventListener('click', fDeleteTask);

    borrarTodo.addEventListener('click', fBorrarTodo);

    document.addEventListener('DOMContentLoaded', leerLocalStorage);

}

// FUNCIONES
function inicioApp(){

    profile.disabled = true;
    contact.disabled = true;
}







function fAddTaskList(e) {

    let tarea = document.getElementById('txtTask').value;
    const obligatorio = document.getElementById('obligatorio');

    if (tarea == '' && obligatorio.classList.contains('ocultar')) {

        obligatorio.classList.remove('ocultar');
        obligatorio.classList.add('mostrar');

        return;
    }

    if (tarea == '' && obligatorio.classList.contains('mostrar')) {
        return;
    }


    if (tarea != '' && obligatorio.classList.contains('mostrar')) {

        obligatorio.classList.remove('mostrar');
        obligatorio.classList.add('ocultar');

    }
    const horaYfecha = document.getElementById('horaYfecha').value;

    if (horaYfecha == '' && obligatorioTambien.classList.contains('ocultar')) {

        obligatorioTambien.classList.remove('ocultar');
        obligatorioTambien.classList.add('mostrar');

        return;
    }

    if (horaYfecha == '' && obligatorioTambien.classList.contains('mostrar')) {
        return;
    }


    if (horaYfecha != '' && obligatorioTambien.classList.contains('mostrar')) {

        obligatorioTambien.classList.remove('mostrar');
        obligatorioTambien.classList.add('ocultar');

    }


    let sinEspacio = tarea.trim();



    const btnBorrar = document.createElement('a');

    const iconoBorrar = document.createElement('i');
    iconoBorrar.classList = 'fas fa-times';
    btnBorrar.classList = "borrar-tarea";

    btnBorrar.appendChild(iconoBorrar);

    const div = document.createElement("div");

    let select = document.getElementById('prioridad').value;
    div.setAttribute("id", '1');

    if (select == "1") {
        div.classList = 'card mt-4 mb-0 p-2 pl-4 enlinea prioridadBaja';

    } else if (select == "2") {
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
    document.getElementById('horaYfecha').value = '';

    guardarLocalStorage(tarea);

}


function fDeleteTask(e) {

    let children = document.querySelectorAll('#taskList div');

    if (e.target.parentElement.className === "borrar-tarea") {


        e.target.parentElement.parentElement.remove();

        eliminarLocalStorage(e.target.parentElement.parentElement.innerText);

        if (children.length === 1) {

            let ninguna = document.getElementById('ningunaTarea');
            ninguna.classList = "text-center mt-4 mostrar";

        }
    }

}

function fBorrarTodo() {

    let children = document.querySelectorAll('#taskList div');

    children.forEach(function (child) {

        child.parentNode.removeChild(child);

    });

    let ninguna = document.getElementById('ningunaTarea');
    ninguna.classList = "text-center mt-4 mostrar";

}


function guardarLocalStorage(tarea) {

    let tareas;

    tareas = obtenerLocalStorage();

    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));


}


function obtenerLocalStorage() {


    let tareasLS;
    if (localStorage.getItem('tareas') === null) {
        tareasLS = [];
    } else {
        tareasLS = JSON.parse(localStorage.getItem('tareas'));
    }

    return tareasLS;

}

function leerLocalStorage() {

    let tareasLs;
    tareasLs = obtenerLocalStorage();

    tareasLs.forEach(function (tarea) {
        let sinEspacio = tarea.trim();



        const btnBorrar = document.createElement('a');
    
        const iconoBorrar = document.createElement('i');
        iconoBorrar.classList = 'fas fa-times';
        btnBorrar.classList = "borrar-tarea";
    
        btnBorrar.appendChild(iconoBorrar);
    
        const div = document.createElement("div");
    
        let select = document.getElementById('prioridad').value;
        div.setAttribute("id", '1');
    
        if (select == "1") {
            div.classList = 'card mt-4 mb-0 p-2 pl-4 enlinea prioridadBaja';
    
        } else if (select == "2") {
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
        document.getElementById('horaYfecha').value = '';
    })


}

function eliminarLocalStorage(tarea){

    let tareasLS;
    
    
    tareasLS = obtenerLocalStorage();
    tareasLS.forEach(function(tareasLS,index){
        if(tareasLS === tarea){
            tareasLS.splice( index,1);
        }
    });

    localStorage.setItem('tareas', JSON.stringify(tareasLS));
}