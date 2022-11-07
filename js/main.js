
alert("Bienvenidos a Eduart Bank.\nPor favor complete los campos solicitados.")

// Datos de Usuario solicitante

let nombreIngresado = prompt("Nombre: ");
let apellidoIngresado = prompt("Apellido: ");
let fechaNacimiento =("Ingresar Año de nacimiento: ");
let dniIngresado = prompt("Ingresar D.N.I: ");
let nacionalidadIngresada = prompt("Nacionalidad: ")
let estadoCivilIngresado = prompt("Ingrese el numero de opcion depediendo su estado:\n1 - Soltero\n2 - Casado\n3 - Divorciado\n4 - Viudo")

// Datos alamacenados
const usuario = {
    Nombre: nombreIngresado,
    Apellido: apellidoIngresado,
    FechaNacimiento: fechaNacimiento,
    DNI: dniIngresado,
    Nacionalidad: nacionalidadIngresada,
    EstadoCivil: estadoCivilIngresado,

}

function resta(a, b){ 
    return a + b;
let fechaActual = 2022;
}



// let edad = resta(fechaIngresada, fechaActual);
//  comparando la edad minima con la calculada 
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
