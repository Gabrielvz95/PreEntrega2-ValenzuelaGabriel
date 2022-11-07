
alert("Bienvenidos a Eduart Bank.\nPor favor complete los campos solicitados.")

// Datos de Usuario solicitante
let nombreIngresado = prompt("Nombre: ");
let apellidoIngresado = prompt("Apellido: ");
let fechaNacimiento = prompt("Ingresar Año de nacimiento: ");
let dniIngresado = prompt("Ingresar D.N.I: ");
let nacionalidadIngresada = prompt("Nacionalidad: ")
let estadoCivilIngresado = prompt("Ingrese el numero de opcion depediendo su estado:\n1 - Soltero\n2 - Casado\n3 - Divorciado\n4 - Viudo");
let fechaActual = 2022;
//Verificaicon de opciones de estado civil
while(estadoCivilIngresado >= 5){
    alert('Ingrese una opcion valida.')
    estadoCivilIngresado = prompt("Ingrese el numero de opcion depediendo su estado:\n1 - Soltero\n2 - Casado\n3 - Divorciado\n4 - Viudo");
}
alert("Opcion valida")

// Reaccinacion de variable Estado Civil
if (estadoCivilIngresado == 1){
    var estadoCivil = 'Soltero';
} else if (estadoCivilIngresado == 2){
    var estadoCivil = 'Casado';
} else if (estadoCivilIngresado == 3){
    var estadoCivil = 'divorciado';
}else (estadoCivilIngresado == 4);{
    var estadoCivil = 'viudo';
}

// Datos de usuario alamacenados
const usuario = {
    Nombre: nombreIngresado,
    Apellido: apellidoIngresado,
    FechaNacimiento: fechaNacimiento,
    DNI: dniIngresado,
    Nacionalidad: nacionalidadIngresada,
    EstadoCivil: estadoCivil,

}
// Funcion de resta
function resta(a, b){ 
    return a + b;
}
//  comparando la edad minima con la calculada 
let edad = resta(usuario.FechaNacimiento, fechaActual);
if(edad >= 18){ 
    console.log("Edad aceptada")
    sueldo = prompt("Ingresa ingresos mensuales: ")
}else{
    console.log("Para salicitar un prestamo tiene que ser mayor de edad")
}

console.log('Datos personales aceptados')
alert("Perfecto"+usuario.Nombre, Apellido);


