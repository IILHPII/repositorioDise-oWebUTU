//Variables
const inputTarea = document.querySelector('#tareaid');
const formulario = document.querySelector('#formulario');
const btnAgregar = document.querySelector('.btn-agregar');
const contenedorForm = document.querySelector('.form');
const cuerpoTabla = document.querySelector('.cuerpoTabla');
let tareas = []
const tarea = {
    mensaje: ''
}

//Events Listeners
eventListeners();

function eventListeners() {
    inputTarea.addEventListener('blur', e => {
        const valor = e.target.value;
        if (valor.trim() !== '') {
            agregarTarea(valor);
            guardarLocalStorage();
        } else {
            crearAlerta('El campo tarea esta vacio!');
        }
    });
    formulario.addEventListener('submit', validarTarea);
    document.addEventListener('DOMContentLoaded',cargarTareas);
}

//Funciones
function agregarTarea(valor) {
    const nuevaTarea = {
        mensaje: valor
    };
    tareas.push(nuevaTarea);
    guardarLocalStorage(nuevaTarea);
    console.log(tareas);
}

function validarTarea(e) {
    const tarea = inputTarea.value;
    e.preventDefault();
    if (tarea.trim() !== '') {
        mostrarTarea();
    } else {
        crearAlerta('El campo tarea no puede ir vacio!');
    }
}

function mostrarTarea() {
    limpiarHTML();
    tareas.forEach(tarea => {
        const trow = document.createElement('tr');
        const celdaDatos = document.createElement('td');
        const accionTd=document.createElement('td');
        const accion=document.createElement('a');
        celdaDatos.innerText = tarea.mensaje;
        accion.innerText='Eliminar';
        accionTd.appendChild(accion);
        trow.appendChild(celdaDatos);
        trow.appendChild(accionTd);
        cuerpoTabla.appendChild(trow);
    });
}

function crearAlerta(mensaje) {
    const parrafo = document.createElement('p');
    parrafo.innerText = mensaje;
    parrafo.classList.add('mensajeAlerta', 'alerta');
    contenedorForm.appendChild(parrafo);

    setTimeout(() => {
        parrafo.style.opacity = '1'; // Hacer el mensaje visible
        parrafo.style.height = 'auto'; // Ajustar la altura automáticamente
    }, 10);

    setTimeout(() => {
        contenedorForm.removeChild(parrafo);
    }, 3000);
}


function guardarLocalStorage(tarea) {
    const tareasLocal = JSON.parse(localStorage.getItem('tareas')) || [];
    if (tareasLocal.length >= 0) {
        if (tarea != null) {
            tareasLocal.push(tarea);
            localStorage.setItem('tareas', JSON.stringify(tareasLocal));
        }
    }
}

function limpiarHTML() {
    while (cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }
}

function cargarTareas(){
    const tareasLocal = JSON.parse(localStorage.getItem('tareas')) || [];
    if (tareasLocal.length > 0){
        tareasLocal.forEach(tarea=>{
            const trow = document.createElement('tr');
            const celdaDatos = document.createElement('td');
            const accionTd=document.createElement('td');
            const accion=document.createElement('a');
            celdaDatos.innerText = tarea.mensaje;
            accion.innerText='Eliminar';
            accionTd.appendChild(accion);
            trow.appendChild(celdaDatos);
            trow.appendChild(accionTd);
            cuerpoTabla.appendChild(trow);
        });
        tareas=tareasLocal;
    }
}