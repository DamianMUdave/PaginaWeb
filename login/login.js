//confirmacion de login

function login() { //se ejecuta cuando se presiona el boton de login

    var correo, Contraseña;
    /*var jwt = require('jsonwebtoken')
    function generateToken(user){
        var u = {
            correo: user.correo,
            id: user.id
        }
        return token = jwt.sign(u, 'Contraseña',{
            expiresIn: 60 * 60 * 24
        })
    }*/
    //verificación sin tokens
    correo = document.getElementById('email').value;  //obtiene el valor del campo email
    Contraseña = document.getElementById('pass').value; //obtiene el valor del campo pass

    if(correo == "admin@hotmail.com" && Contraseña == "12345678"){ //se comprueba si el correo y la contraseña son correctos
        location.href = "/Datos/Datos.html";
        alert("Iniciaste Sesión");
    }else{ //se comprueba si el correo y la contraseña son incorrectos
        location.href = "/Register/index.html";
        alert("Usuario o contraseña incorrectos");
    }
    
    }