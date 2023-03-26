let Bot_Datos = document.getElementById("Bot_Datos");
let Regreso = document.getElementById("Regreso");
let Bot_Contacto = document.getElementById("Bot_Contacto");

Bot_Datos.addEventListener("click" , Mostrar);
Regreso.addEventListener("click" , Ocultar);
Bot_Contacto.addEventListener("click" , Mostrar);

function Mostrar() {
    document.getElementById("Datos").style.display = "block";
    document.getElementById("Regreso").style.display = "block";
}

function Ocultar() {
    document.getElementById("Datos").style.display = "none";
    document.getElementById("Regreso").style.display = "none";
}

function Mostrar() {
    document.getElementById("Datos_Contac").style.display = "block";
    document.getElementById("Regreso").style.display = "block";
}

function Ocultar() {
    document.getElementById("Datos_Contac").style.display = "none";
    document.getElementById("Regreso").style.display = "none";
}