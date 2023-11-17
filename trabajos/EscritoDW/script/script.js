const boton = document.querySelector(".button-listo");
let boton1 = document.createElement('button');
let boton2 = document.createElement('button');
let boton3 = document.createElement('button');
let boton4 = document.createElement('button');
const contenedorPreguntas = document.querySelector(".contenedor-preguntas");
const contenedorBotones = document.createElement('div');
const titulo=document.querySelector(".titulo-cuestionario");
const titulo2=document.createElement('h1');
const parrafoHora=document.createElement('p');
const parrafoOrganizador=document.createElement('p');
let preguntaActual = 0;

const preguntas = [
    {
        texto: "Lenguaje de programación utilizado para crear sitios web",
        opciones: ["Javascript", "Python", "Java", "HTML"],
        respuestaCorrecta: 4,
        pista: "Pista: Hypertext Markup Language"
    },
    {
        texto: "Tipo de red informática que conecta computadoras en todo el mundo",
        opciones: ["Internet", "LAN", "Intranet", "Arpanet"],
        respuestaCorrecta: 1,
        pista: "Pista: Red de computadoras interconectada a nivel mundial en forma de tela de araña"
    },
    {
        texto: "Nombre del software utilizado para proteger datos en un dispositivo informático",
        opciones: ["Juego", "IDE", "Antivirus", "JDK"],
        respuestaCorrecta: 3,
        pista: "Pista: Detecta la presencia de un virus informático en un disquete o en una computadora y lo elimina"
    }
];

function valorBotones(boton1V, boton2V, boton3V, boton4V) {
    boton1.innerText = boton1V;
    boton1.value = 1;
    boton1.classList.add("button-listo");

    boton2.innerText = boton2V;
    boton2.value = 2;
    boton2.classList.add("button-listo");

    boton3.innerText = boton3V;
    boton3.value = 3;
    boton3.classList.add("button-listo");

    boton4.innerText = boton4V;
    boton4.value = 4;
    boton4.classList.add("button-listo");

    contenedorBotones.appendChild(boton1);
    contenedorBotones.appendChild(boton2);
    contenedorBotones.appendChild(boton3);
    contenedorBotones.appendChild(boton4);
    contenedorBotones.classList.add("contenedor-botones");

    contenedorPreguntas.appendChild(contenedorBotones);
}

function respuesta1(valor) {
    const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;

    if (valor === respuestaCorrecta) {
        removerParrafoPista();
        return true;
    } else {
        const pista = preguntas[preguntaActual].pista;
        return pista;
    }
}

function crearPregunta(texto) {
    const parrafoPregunta = document.querySelector(".parrafo-preguntas");
    parrafoPregunta.innerText = texto;
}

function crearParrafoPista(texto) {
    const parrafoPregunta = document.querySelector(".parrafo-preguntas");
    const parrafoPistaExistente = document.querySelector(".parrafo-pista");

    if (parrafoPistaExistente) {
        parrafoPistaExistente.innerText = texto;
    } else {
        const parrafoPista = document.createElement('p');
        parrafoPista.innerText = texto;
        parrafoPista.classList.add("parrafo-pista");
        parrafoPregunta.appendChild(parrafoPista);
    }
}

function removerParrafoPista() {
    const parrafoPistaExistente = document.querySelector(".parrafo-pista");
    if (parrafoPistaExistente) {
        parrafoPistaExistente.remove();
    }
}

function eventosBotones1() {
    boton1.removeEventListener("click", onClickBoton1);
    boton2.removeEventListener("click", onClickBoton2);
    boton3.removeEventListener("click", onClickBoton3);
    boton4.removeEventListener("click", onClickBoton4);

    boton1.addEventListener("click", onClickBoton1);
    boton2.addEventListener("click", onClickBoton2);
    boton3.addEventListener("click", onClickBoton3);
    boton4.addEventListener("click", onClickBoton4);
}

function onClickBoton1() {
    const resultado = respuesta1(1);
    if (resultado === true) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        crearParrafoPista(resultado);
    }
}

function onClickBoton2() {
    const resultado = respuesta1(2);
    if (resultado === true) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        crearParrafoPista(resultado);
    }
}

function onClickBoton3() {
    const resultado = respuesta1(3);
    if (resultado === true) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        crearParrafoPista(resultado);
    }
}

function onClickBoton4() {
    const resultado = respuesta1(4);
    if (resultado === true) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        crearParrafoPista(resultado);
    }
}

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        valorBotones(
            preguntas[preguntaActual].opciones[0],
            preguntas[preguntaActual].opciones[1],
            preguntas[preguntaActual].opciones[2],
            preguntas[preguntaActual].opciones[3]
        );
        crearPregunta(preguntas[preguntaActual].texto);
        eventosBotones1();
    } else {
        contenedorPreguntas.innerHTML="";
        titulo2.innerText="¡Felicidades!";
        titulo2.classList.add("titulo-cuestionario");
        parrafoHora.innerText="Hora del evento: 17:00";
        parrafoHora.classList.add("parrafo-pista");
        parrafoOrganizador.innerText="Organizador: Leandro Hernandez";
        parrafoOrganizador.classList.add("parrafo-pista");
        contenedorPreguntas.appendChild(titulo2);
        const contenedorMapa=document.createElement('div');
        contenedorMapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15578.434576976064!2d-56.196893500789166!3d-34.83203667471496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02b2a3a32b563%3A0xf450a6bd4315ef8d!2sFANATICOS%20F%C3%9ATBOL%205!5e0!3m2!1ses!2suy!4v1700248740341!5m2!1ses!2suy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        contenedorPreguntas.appendChild(contenedorMapa);
        contenedorPreguntas.appendChild(parrafoHora);
        contenedorPreguntas.appendChild(parrafoOrganizador);
    }
}

function eventos() {
    boton.addEventListener("click", () => {
        boton.remove();
        mostrarPregunta();
    });
}

document.addEventListener("DOMContentLoaded", eventos);
