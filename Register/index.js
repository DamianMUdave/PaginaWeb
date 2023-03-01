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

if(nombre.value.length==0){
warnings += 'No ingreso ningun nombre <br>'
entrar = true;
}else{
//se comprueba que los campos no esten vacios
if (nombre.value.length <6) {
warnings += 'Nombre no valido '+nombre.value+' favor de ingresar más de 6 caracteres <br>'
entrar = true;
}
}
if(email.value.length==0){
    warnings += 'No ingreso ningun email <br>'
    entrar = true;
    }else{
if (!regexEmail.test(email.value)){
    warnings +='No es un Email valido, ' +email.value+ ' Por favor revice que este correcto  <br>'
    entrar = true;

}
}
if(nombre.value.length==0){
    warnings += 'No ingreso ningun password <br>'
    entrar = true;
}else{
if(pass.value.length <8){
    warnings += 'Contraseña no valida favor de ingresar minimo 8 digitos <br>'
    entrar = true;
}
}
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Registro Excitoso";
        
    }
    

})