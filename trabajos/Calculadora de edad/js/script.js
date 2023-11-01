const inputSelect = document.getElementById("idEdad");
const contenedorImagen = document.querySelector(".contenedorFoto");


function opciones(e) {
    const opcion = e.target.value;
    const imagen = document.createElement('img');
    imagen.classList.add('imagen');
    switch (opcion) {
        case "0":
            imagen.src = "./imgs/0.jpg";
            break;
        case "1":
            imagen.src = "./imgs/1.webp";
            break;
        case "2":
            imagen.src = "./imgs/2.jpg";
            break;
        case "3":
            imagen.src = "./imgs/3.jpg";
            break;
        case "4":
            imagen.src = "./imgs/4.jpg";
            break;
        case "5":
            imagen.src = "./imgs/5.jpg";
            break;

    }
    if (document.querySelector('.imagen')) {
        document.querySelector('.imagen').remove();
    }
    contenedorImagen.appendChild(imagen);
}

function eventos() {
    inputSelect.addEventListener("change", opciones);
}


document.addEventListener('DOMContentLoaded', eventos);