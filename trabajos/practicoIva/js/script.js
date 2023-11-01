const formulario = document.getElementById("formulario");
const inputTaza = document.getElementById('tazaId');
const inputMonto = document.getElementById('montoId');
const contenedorTotal=document.querySelector('.totalContenedor');

function CalculoIva() {
    this.tasa = 0;
    this.monto = 0;
    this.total=0;
}

CalculoIva.prototype.agregarTasa = function (tasa) {
    this.tasa = tasa;
};

CalculoIva.prototype.agregarMonto = function (monto) {
    if (isNaN(monto)) {
        const alerta = document.createElement('p');
        alerta.classList.add('error');
        alerta.innerText = "¡El monto ingresado es invalido!";
        if (!document.querySelector(".error")) {
            formulario.appendChild(alerta);
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
    } else {
        this.monto = monto;
    }
};

CalculoIva.prototype.calcularIva = function () {
    switch (this.tasa) {
        case 1:
            this.iva = this.monto * 0.10;
            this.total = this.iva + this.monto;
            return this.total;
        case 2:
            this.iva = this.monto * 0.22;
            this.total = this.iva + this.monto;
            return this.total;
        default:
            console.log("Tasa de IVA no válida");
            return null;
    }
};

CalculoIva.prototype.mostrarCalculo=function (){
    const totalUx=document.createElement('p');
    totalUx.classList.add('total');
    const resultado=this.total;
    console.log(resultado);
    if(document.querySelector(".total")){
        document.querySelector(".total").remove();
    }
    totalUx.innerText="El total es: "+resultado;
    contenedorTotal.appendChild(totalUx);
};

const calculo = new CalculoIva();

function eventos(e) {
    inputTaza.addEventListener("blur", e => calculo.agregarTasa(parseFloat(e.target.value)));
    inputMonto.addEventListener("blur", e => calculo.agregarMonto(parseFloat(e.target.value)));
}


document.addEventListener("DOMContentLoaded", eventos);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    calculo.calcularIva();
    calculo.mostrarCalculo();
})


