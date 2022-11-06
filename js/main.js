
alert("Bienvenidos a Eduart Bank.\nPor favor complete los campos solicitados.")

let nombre = prompt("Nombre: ");
let apllido = prompt("Apellido: ");
let fechaIngresada =("Ingresar Año de nacimiento: ");
let dniIngr = prompt("Ingresar D.N.I: ");
let nacionalidad = prompt("Nacionalidad: ")
let estadoCivil = prompt("Ingrese el numero de opcion depediendo su estado:\n1 - Soltero\n2 - Casado\n3 - Divorciado\n4 - Viudo")

function usuarioNuevo(nombre, apellido, fechaNacmineto, Dni, Nacionalidad){
    this.nombre = nombre,
    this.Apellido = apellido,
    this.feachaNacimineto = fechaIngresada,
    this.dni = dniIngresado,
    this.nacionalidad = nacionalidad
}

console.log(usuarioNuevo.dni);

// let user = prompt("Ingresar nombre de usuario");

// const usuario = {
//     nombreUsuario: "Gabriel"
// }

// if (usuario.nombreUsuario == user){
//     console.log("Usuario aceptado");
// }else {
//     console.log("Usuario rechazado");
// }

// function resta(a, b){ 
//     return a + b;
// }
// let fechaActual = 2022;
// let nombre = prompt("Ingresar nombre: ");

// console.log("Hola " + nombre)
// console.log("A continuacion te pediremos que respondas unas preguntas para evaluar tu solitud de prestamos")

// let fechaIngresada = prompt("Ingresar fecha de nacimiento: ")

// let edad = resta(fechaIngresada, fechaActual);
// // comparando la edad minima con la calculada 
// if(edad >= 18){ 
//     console.log("Edad aceptada")
//     sueldo = prompt("Ingresa ingresos mensuales: ")

// }else{
//     console.log("Para salicitar un prestamo tiene que ser mayor de edad")
// }
// // El ciclo se repetira hasta que se alcanse el minimo de sueldo aceptado para el prestamo
// while(sueldo <= 120.000){ 
//     alert("Ingresos demaciados bajos.")
//     sueldo = prompt("Ingrese ganacias mensuales")
    
// }
// alert("Ingreso mensuales aceptados!")

// let ocupacion = prompt("Escriba el numero de su profecion o ocupacion:\b 1 - Empleador \b 2 - Relacion de dependencia \b 3 - independinte")

