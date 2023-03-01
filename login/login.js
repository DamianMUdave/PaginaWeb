//confirmacion de login

function login() { //se ejecuta cuando se presiona el boton de login

    var correo, Contraseña;

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