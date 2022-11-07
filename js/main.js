
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
// Comparando la edad minima con la calculada 
let edad = resta(usuario.FechaNacimiento, fechaActual);
if(edad >= 18){ 
    console.log("Edad aceptada")
}else{
    console.log("Para salicitar un prestamo tiene que ser mayor de edad")
}
console.log('Datos personales aceptados')
    alert("Perfecto"+usuario.Nombre, "tus datos personales fueron aceptados\nAcontinuacion te haremos algunas preguntas mas.");

// Solicitud de informacion finaciera 
let trabajo = prompt('¿A que te dedicas?:')
let antiguedadLaboral = prompt('¿Hace cuantos años trabajas?:')
let tipoDeTrabajo = prompt("Por favor ingrese el numero de la opcion.\nEres:\n 1 - Relacion de dependencia\n 2 - Monitributista\n 3 - Empleador\n 4 - Pyme")

const informacionLaboral = {
    trabajo: trabajo,
    Antiguedad: antiguedadLaboral,
    Relacion: tipoDeTrabajo
}

if(antiguedadLaboral > 1){
    
}



