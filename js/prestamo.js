const formularioSimulador = document.getElementById("form-simulador");
const nombreSolicitante = document.getElementById("nombre-sin");
const apellidoSimulador = document.getElementById("apellido-sim");
const edadCliente = document.getElementById("edad-sim");
const numDni = document.getElementById("num-dni");
const numTel = document.getElementById("num-tel");
const estadoCivil = document.getElementById("estado-civil");
const salarioIngresado = document.getElementById("salario-ing");
const antiguedadLab = document.getElementById("antiguedad-sim");
const edadMinima = document.getElementById("edad-error")


formularioSimulador.addEventListener("submit", (e) => {
    e.preventDefault();
    if(edadCliente.value >= 18){
        window.location.href = "/pages/prestamo.html";
    }else{
        edadMinima.innerText = "Tienes que ser mayor de 18 años!"
    }
})