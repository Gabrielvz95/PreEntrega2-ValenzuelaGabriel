const simuladorFinal = document.getElementById('simulador');
const salarioMensual = documente.getElementById('#salario-mensual');
const montoPrestamo = documente.getElementById('#monto-prestamo');
const cuotas = documente.getElementById('#cuotas');
let interesAnual;

function calculadoraProcentaje(a, b){
    return a * b / 100
}
function dividir(a, b){
    return a / b
}

simuladorFinal.addEventListener("submit", (e) => {
    e.preventDefault();

    //eleva el interes dependiendo las cuotas
    if(cuotas.value <= 1){
        interesAnual = 10;
    }else if(cuotas.value < 12){
        interesAnual = 85;
    }else(cuotas.value < 24);{
        interesAnual = 120;
    }
    let montoCalculado = calculadoraProcentaje(montoPrestamo.value, interesAnual);
    let montoCuotas = dividir(montoPrestamo, cuotas);


})



console.log("Tus cuotas son:" +cuotas,"De:" +montoCuotas, "Cada una.");