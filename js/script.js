function prevButton() { window.location.href = './index.html'; }
function nextButton() { window.location.href = './index.html'; }
function homeButton() { window.location.href = './index.html'; }
function accionButton() { window.location.href = './accion.html'; }
function subirButton() { window.scrollTo({top: 0}) }

const juegos = [
    {
    "_id": 1,
    "nombre": "Tom Clancy The Division",
    "foto": "<img src=./img/accion/imagen1.jpg>",
    "genero": "Acción",
    "año": "2001",
    },
    {
    "_id": 2,
    "nombre": "Terminator",
    "foto": "<img src=./img/accion/imagen2.jpg>",
    "genero": "Acción",
    "año": "2002",
    },
    {
    "_id": 3,
    "nombre": "Modern Combat",
    "foto": "<img src=./img/accion/imagen3.jpg>",
    "genero": "Acción",
    "año": "2003",
    },
    {
    "_id": 4,
    "nombre": "Call Of Dutty - Black Ops 3",
    "foto": "<img src=./img/accion/imagen4.jpg>",
    "genero": "Acción",
    "año": "2004",
    },
    {
    "_id": 5,
    "nombre": "Call Of Dutty - Black Ops",
    "foto": "<img src=./img/accion/imagen5.jpg>",
    "genero": "Acción",
    "año": "2005",
    },
    {
    "_id": 6,
    "nombre": "Combat Arms",
    "foto": "<img src=./img/accion/imagen6.jpg>",
    "genero": "Acción",
    "año": "2006",
    },
    {
    "_id": 7,
    "nombre": "Doom - collector's Edition",
    "foto": "<img src=./img/accion/imagen7.jpg>",
    "genero": "Acción",
    "año": "2007",
    },
    {
    "_id": 8,
    "nombre": "Gears of Wars 3",
    "foto": "<img src=./img/accion/imagen8.jpg>",
    "genero": "Acción",
    "año": "2008",
    },
    {
    "_id": 9,
    "nombre": "Frontlines - Fuel Of War",
    "foto": "<img src=./img/accion/imagen9.jpg>",
    "genero": "Acción",
    "año": "2009",
    },
];

function agregarElementos() {
    let pContainer = document.getElementById('container');
    juegos.forEach(function(juego) {
    let pDiv = document.createElement('div');
    pDiv.classList.add('grid-item');
    pDiv.innerHTML = juego.foto;
    pContainer.appendChild(pDiv);
  });
}

function domLoaded() {document.addEventListener('DOMContentLoaded', agregarElementos())};

