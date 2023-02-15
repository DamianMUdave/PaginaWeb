//se mandan a llamar los id de los campos de la tabla
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const form =document.getElementById('form');
const parrafo = document.getElementById('warnings');
//se crea un objeto para guardar los datos del formulario
form.addEventListener("submit", e => {
e.preventDefault();
let warnings = ""
let entrar = false;
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
parrafo.innerHTML = ""
//se comprueba que los campos no esten vacios 
if (nombre.value.length <6) {
warnings += 'Nombre no valido favor de ingresar más de 6 caracteres <br>'
entrar = true;
}
//console.log(regexEmail.test(correo.value))
if (!regexEmail.test(email.value)){
    warnings +="No es un Email valido, Por favor revice que este correcto  <br>"
    entrar = true;

}
    if(pass.value.length <8){
        warnings += "Contraseña no valida favor de ingresar minimo 8 digitos <br>"
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Registro Excitoso";
        
    }
    

})
