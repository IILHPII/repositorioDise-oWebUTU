document.addEventListener('DOMContentLoaded', (e) => {
    const objeto = {}
    const inputNombre = document.querySelector('#nombreId');
    const inputPrecio = document.querySelector('#precioId');
    const imagenSrc = document.querySelector('#imagenId');
    const formulario = document.getElementById('formulario');

    function calcularIva(precio) {
        let precioIva = parseInt(precio) / 0.22;
        real = parseInt(precioIva) + parseInt(precio);
        return real;
    }

    function agregarObjeto(e) {
        e.preventDefault();
        const { imagen, nombre, precio } = objeto;
        const precioIva = calcularIva(precio);
        const contenedorProductos = document.querySelector('.contenedor-objetos');
        const articleProducto = document.createElement('article');
        const spanProducto = document.createElement('span');
        const articlePrecio = document.createElement('article');
        const spanPrecio = document.createElement('span');
        const articleIva = document.createElement('article');
        const spanIva = document.createElement('span');
        const div = document.createElement('div');
        const btnComprar = document.createElement('input'); // Cambiar de 'button' a 'input'
        btnComprar.type = 'submit'; // Establecer el tipo de input como 'submit'
        btnComprar.value = 'Comprar'; // Establecer el valor del input
        btnComprar.classList.add('bg-red-600', 'p-2', 'letraProducto', 'uppercase', 'btn-Producto');
        div.classList.add('objeto', 'w-full', 'md:w-1/2', 'lg:w-1/3', 'xl:w-1/4', 'flex', 'flex-col', 'items-center', 'justify-center', 'text-white'
            , 'gap-3'
            , 'text-2xl', 'p-3');
        const contenedorImagen = document.createElement('div');
        contenedorImagen.classList.add('flex', 'justify-center', 'max-w-xs');
        const imagenRopa = document.createElement('img');
        let urlImagen = "imgs/" + imagen;
        imagenRopa.src = urlImagen;
        imagenRopa.classList.add('w-1/2', 'h-1/2');
        contenedorImagen.appendChild(imagenRopa);
        spanProducto.innerText = nombre;
        articleProducto.innerText = "Producto: ";
        articleProducto.appendChild(spanProducto);
        articleProducto.classList.add('uppercase', 'letraProducto');
        articlePrecio.innerText = "Precio: ";
        spanPrecio.innerText = precio + " USD";
        articlePrecio.classList.add('uppercase', 'letraProducto');
        articlePrecio.appendChild(spanPrecio);
        articleIva.innerText = 'Precio+IVA: ';
        articleIva.classList.add('uppercase', 'letraProducto');
        spanIva.innerText = precioIva + " USD";
        articleIva.appendChild(spanIva);
        div.appendChild(contenedorImagen);
        div.appendChild(articleProducto);
        div.appendChild(articlePrecio);
        div.appendChild(articleIva);
        div.appendChild(btnComprar);
        contenedorProductos.appendChild(div);
    }

    function obtenerValor(e) {
        if (e.target.value.trim() == '') {
            mensajeCampo(e);
        } else {
            objeto[e.target.name] = e.target.value;
            eliminarAlerta(e);
        }
    }

    function mensajeCampo(e) {
        const elementoPadre = e.target.parentElement;
        const parrafo = document.createElement('p');
        const contenido = `El campo ${e.target.name} esta vacio!`;
        parrafo.classList.add('parrafoError', "text-red-600");
        parrafo.innerText = contenido;
        if (!elementoPadre.querySelector('.parrafoError')) {
            elementoPadre.appendChild(parrafo);
        }
    }

    function eliminarAlerta(e) {
        const alerta = e.target.parentElement.querySelector('.parrafoError');
        if (alerta) {
            alerta.remove();
        }
    }

    inputNombre.addEventListener('blur', obtenerValor);
    inputPrecio.addEventListener('blur', obtenerValor);
    imagenSrc.addEventListener('change', () => {
        const nombreArchivo = imagenSrc.files[0].name;
        objeto.imagen = nombreArchivo;
    });


    formulario.addEventListener('submit', agregarObjeto);


}); 