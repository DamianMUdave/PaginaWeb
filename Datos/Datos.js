const api_url = 'https://jsonplaceholder.typicode.com';//url de la API publica
const HTMLresponse = document.querySelector('#app');//selecciona donde se insertaran los datos en el HTML
const ul = document.createDocumentFragment();('ul');//crea una parte especifica para insertar los datos

fetch(`${api_url}/users`)//se le añade "/users" para acceder a la carpeta de usuarios de la API
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            let el = document.createElement('li');//crea un elemento para insertar cada registro
            //solicita unicamente el nombre y el correo de cada registro para mostrarlo en la pagina
            el.appendChild(document.createTextNode(`${user.name} ${user.email}`));
            ul.appendChild(el);//añade el registro en "ul" junto los demas registros que se pediran
        });
        HTMLresponse.appendChild(ul);//añade todos los registros solicitados al HTML
    })

//cierra la modal al pulsar en la X 
var modal = document.getElementById("window-notice");//llama toda la ventana emergente
var cerrar = document.getElementsByClassName("close-button")[0];//obtiene el valor del boton para cerrar
//pone invisible la ventana emergente
cerrar.addEventListener("click", function() {
    modal.style.display = "none";
})