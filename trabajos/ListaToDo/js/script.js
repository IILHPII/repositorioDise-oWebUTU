//Variables
const inputTarea = document.querySelector('#tareaid');
const formulario = document.querySelector('#formulario');
const btnAgregar = document.querySelector('.btn-agregar');
const contenedorForm = document.querySelector('.form');
const cuerpoTabla = document.querySelector('.cuerpoTabla');
const tabla=document.querySelector('.tabla');

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
            if (filtrarLista(valor) === false) {
                agregarTarea(valor);
            } else {
                crearAlerta('La tarea ya existe!');
            }
        } else {
            crearAlerta('El campo tarea esta vacio!');
        }
    });
    formulario.addEventListener('submit', validarTarea);
    document.addEventListener('DOMContentLoaded', cargarTareas);
    document.addEventListener('DOMContentLoaded', agregarEventoClick);
}

//Funciones
function agregarTarea(valor) {
    const nuevaTarea = {
        mensaje: valor
    };
    tareas.push(nuevaTarea);
    guardarLocalStorage(nuevaTarea);
    agregarEventoClick();
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
        const accionTd = document.createElement('td');
        const accion = document.createElement('button');
        accion.classList.add('eliminarFila');
        accion.value=tarea.mensaje;
        celdaDatos.innerText = tarea.mensaje;
        accion.innerText = 'X';
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

function cargarTareas() {
    const tareasLocal = JSON.parse(localStorage.getItem('tareas')) || [];
    if (tareasLocal.length > 0) {
        tareasLocal.forEach(tarea => {
            const trow = document.createElement('tr');
            const celdaDatos = document.createElement('td');
            const accionTd = document.createElement('td');
            const accion = document.createElement('button');
            accion.classList.add('eliminarFila');
            accion.value=tarea.mensaje;
            celdaDatos.innerText = tarea.mensaje;
            accion.innerText = 'X';
            accionTd.appendChild(accion);
            trow.appendChild(celdaDatos);
            trow.appendChild(accionTd);
            cuerpoTabla.appendChild(trow);
        });
        tareas = tareasLocal;
    }
}

function filtrarLista(valor) {
    return tareas.some(tarea=>tarea.mensaje === valor);
}

function borrarTarea(){
    console.log('hola');
}

function agregarEventoClick() {
    const botonEliminar = document.querySelectorAll('.eliminarFila');
    botonEliminar.forEach(boton => {
        boton.addEventListener('click', () => {
            console.log(`Le diste click al boton con valor ${boton.value}`)
        });
    });
}