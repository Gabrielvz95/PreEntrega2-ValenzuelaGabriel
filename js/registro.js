const formulario = document.getElementById("form-registro");
const userName = document.getElementById("new-user");
const password = document.getElementById("password");
const passwordVallidation = document.getElementById("repet-password");
const userEmail = document.getElementById("new-email");

formulario.addEventListener("submit", (e) => { // Validacion de formulario.
    e.preventDefault();

    if(password.value == passwordVallidation.value){ // Validacion de contraseñas.
        console.log('contraseña Correcta')
    }else{
        console.log('contraseñas diferentes');
        let passwordError = document.getElementById('password-error');
        passwordError.innerText = "Las contraseñas no coinciden";
    }
    // creador de objeto para nuevos usuarios
    function NewUsers(usuarioNuevo, contraseñaNueva, mailNuevo){
        this.nombreUsuario = usuarioNuevo;
        this.contraseñaUsuario = contraseñaNueva;
        this.mailUsuario = mailNuevo;
    } 

    // Almaceinamiento de informacion usuario
    
    const usuario1 = new NewUsers(userName.value, password.value, userEmail.value);
    const usuarioEnJSON = JSON.stringify(usuario1);

    localStorage.setItem('usuario1', usuarioEnJSON); // Se guarda el nuevo usuario en Local
    formulario.reset(); // Reinicio de formulario
});

