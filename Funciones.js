let Bot_Datos = document.getElementById('Bot_Datos');
let Datos = document.getElementById('Datos');

document.getElementById('Bot_Datos').addEventListener('click' , Mostrar());

function Mostrar() {
    Datos.classList.toggle('show');

    if (Datos.classList.contains('show') ) {
        Datos.innerHTML = 'Volver';
    }
    else {
        Datos.innerHTML = " ";
    }
}

