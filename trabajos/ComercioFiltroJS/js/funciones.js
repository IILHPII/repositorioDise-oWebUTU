//Elementos
const resultados=document.querySelector('.contenedor-resultados');
const filtroTipo=document.querySelector('#tipoId');
const filtroMarca=document.querySelector('#marcaId');
const filtroMinimo=document.querySelector('#minimoid');
const filtroMaximo=document.querySelector('#maximoid');
const limpiarBtn=document.querySelector('#limpiarFiltros-btn');

const datosBusqueda={
    tipo:"",
    marca:"",
    minimo:"",
    maximo:""
}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarProductos(productos);
});

filtroTipo.addEventListener('change',e=>{
    datosBusqueda.tipo=e.target.value;
    filtrarProductos();
});

filtroMarca.addEventListener('change',e=>{
    datosBusqueda.marca=e.target.value;
    filtrarProductos();
});

filtroMinimo.addEventListener('change',e=>{
    datosBusqueda.minimo=e.target.value;
    filtrarProductos();
});

filtroMaximo.addEventListener('change',e=>{
    datosBusqueda.maximo=e.target.value;
    filtrarProductos();
});

limpiarBtn.addEventListener('click',limpiarFiltros)


function mostrarProductos(productos){
    productos.forEach(producto=>{
        const parrafoPrueba=document.createElement('p');
        parrafoPrueba.innerText=`Nombre: ${producto.nombre} Tipo: ${producto.tipo} Marca: ${producto.marca} Precio: ${producto.precio}`;
        resultados.appendChild(parrafoPrueba);
    });
}


function filtrarProductos(){
    const resultado=productos.filter(filtrarTipo).filter(filtrarMarca).filter(filtrarMinimo).filter(filtrarMaximo);
    if(resultado.length === 0){
        alertaFiltro();
    }else{
        limpiarHTML();
        mostrarProductos(resultado);
    }
}

function filtrarTipo(producto){
    const {tipo}=datosBusqueda;
    if(tipo){
        return producto.tipo === tipo;
    }
    return productos;
}

function filtrarMarca(producto){
    const {marca}=datosBusqueda;
    if(marca){
        return producto.marca === marca;
    }
    return productos;
}

function filtrarMinimo(producto){
    const {minimo} =datosBusqueda;
    if(minimo){
        return producto.precio >= parseInt(minimo);
    }
    return productos;
}

function filtrarMaximo(producto){
    const {maximo}=datosBusqueda;
    if(maximo){
        return producto.precio <= parseInt(maximo);
    }
    return productos;
}

function limpiarHTML(){
    while(resultados.firstChild){
        resultados.removeChild(resultados.firstChild);
    }
}

function alertaFiltro(){
    limpiarHTML();
    const parrafo=document.createElement('p');
    parrafo.innerText='No hay resultados en la busqueda'
    resultados.appendChild(parrafo);
}

function limpiarFiltros(){
    limpiarHTML();
    mostrarProductos(productos);
    const {tipo,marca,minimo,maximo}=datosBusqueda;
    filtroTipo.selectedIndex=0;
    filtroMarca.selectedIndex=0;
    filtroMinimo.selectedIndex=0;
    filtroMaximo.selectedIndex=0;
    tipo='';
    marca='';
    minimo='';
    maximo='';
}