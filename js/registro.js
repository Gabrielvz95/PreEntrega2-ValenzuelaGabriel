const formulario = document.getElementById("form-registro");
const userName = document.getElementById("new-user");
const password = document.getElementById("password");
const passwordVallidation = document.getElementById("repet-password");
const userEmail = document.getElementById("new-email");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");
    
    console.log(userName.value);
    console.log(userEmail.value);
});

if(password.value == passwordVallidation.value){
    alert('contraseña igaules');
}else{
    alert('no iguales');
}