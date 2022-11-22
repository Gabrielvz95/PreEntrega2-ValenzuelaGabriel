// Inicio Sesion
const inicioSesion = document.getElementById('form-sesion');
const usuarioIngreado = document.getElementById('usuario-ingresado');
const contraseñaIngresada = document.getElementById('contraseña-ingresada');
const warning = document.getElementById('login-error')
const contenedorLogin = document.getElementById('form-sesion');

const usuariosRegistrados = localStorage.getItem('usuario1');
const usuarioLocal = JSON.parse(usuariosRegistrados);
const waringUsuario = document.getElementById('waring')


inicioSesion.addEventListener("submit", (e) => {
    e.preventDefault();
    if (usuarioIngreado.value == usuarioLocal.nombreUsuario && contraseñaIngresada.value == usuarioLocal.contraseñaUsuario){ // validacion de usuario
        window.location.href = "/pages/prestamo.html";
    }else{
        console.log('Usuario no encontrado')
        waringUsuario.innerText = ('Usuario o Contraseña Incorrecto')
        
    }
    inicioSesion.reset();
})




// console.log(usuarioLocal.nombreUsuario);

















// alert("Bienvenidos a Edward Bank.\nPor favor complete los campos solicitados.")

// // Datos de Usuario solicitante
// let nombreIngresado = prompt("Nombre: ");
// let apellidoIngresado = prompt("Apellido: ");
// let fechaNacimiento = prompt("Ingresar Año de nacimiento: ");
// let dniIngresado = prompt("Ingresar D.N.I: ");
// let nacionalidadIngresada = prompt("Nacionalidad: ")
// let estadoCivilIngresado = prompt("Ingrese el numero de opcion depediendo su estado:\n1 - Soltero\n2 - Casado\n3 - Divorciado\n4 - Viudo");
// let fechaActual = 2022;
// //Verificaicon de opciones de estado civil
// while(estadoCivilIngresado >= 5){
//     alert('Ingrese una opcion valida.')
//     estadoCivilIngresado = prompt("Ingrese el numero de opcion depediendo su estado:\n1 - Soltero\n2 - Casado\n3 - Divorciado\n4 - Viudo");
// }
// alert("Opcion valida")

// // Reaccinacion de variable Estado Civil
// if (estadoCivilIngresado == 1){
//     var estadoCivil = 'Soltero';
// } else if (estadoCivilIngresado == 2){
//     var estadoCivil = 'Casado';
// } else if (estadoCivilIngresado == 3){
//     var estadoCivil = 'divorciado';
// }else (estadoCivilIngresado == 4);{
//     var estadoCivil = 'viudo';
// }

// // Datos de usuario alamacenados
// const usuario = {
//     Nombre: nombreIngresado,
//     Apellido: apellidoIngresado,
//     FechaNacimiento: fechaNacimiento,
//     DNI: dniIngresado,
//     Nacionalidad: nacionalidadIngresada,
//     EstadoCivil: estadoCivil,

// }
// // Funcion de resta
// function resta(a, b){ 
//     return a + b;
// }
// // Comparando la edad minima con la calculada 
// let edad = resta(usuario.FechaNacimiento, fechaActual);
// if(edad >= 18){ 
//     console.log("Edad aceptada")
// }else{
//     console.log("Para salicitar un prestamo tiene que ser mayor de edad")
// }
// console.log('Datos personales aceptados')
//     alert("tus datos personales fueron aceptados.\nAcontinuacion te haremos algunas preguntas mas.");

// // Solicitud de informacion finaciera 
// let trabajo = prompt('¿A que te dedicas?')
// let antiguedadLaboral = prompt('¿Hace cuantos años trabajas?')
// let tipoDeTrabajo = prompt("Por favor ingrese el numero de la opcion.\nEres:\n 1 - Relacion de dependencia\n 2 - Monitributista\n 3 - Empleador\n 4 - Pyme")

// const informacionLaboral = {
//     trabajo: trabajo,
//     Antiguedad: antiguedadLaboral,
//     Relacion: tipoDeTrabajo
// }

//Simulacion de prestamo

//  let montoIngresado = prompt("Ingresar el monto del prestamo:");
//  let plazoCuotas = prompt("Ingresar el plazo (cuotas):");
// // let interesAnual;

// function calculadoraProcentaje(a, b){
//     return a * b / 100
// }
// function dividir(a, b){
//     return a / b
// }

// //eleva el interes dependiendo las cuotas
// if(plazoCuotas <= 1){
//      interesAnual = 10;
// }else if(plazoCuotas < 12){
//      interesAnual = 85;
// }else(plazoCuotas < 24);{
//      interesAnual = 120;
// }

// let montoCalculado = calculadoraProcentaje(montoIngresado, interesAnual);
// let montoCuotas = dividir(montoCalculado, plazoCuotas);

// console.log("Perfecto" +usuario.Nombre);
// console.log("Tus cuotas son:" +plazoCuotas,"De:" +montoCuotas, "Cada una.");





