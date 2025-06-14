const nodoTitulo = document.getElementById('titulo');
console.log(nodoTitulo);
console.dir(nodoTitulo);

/* let nombre = prompt("Ingresa tu nombre"); */
const nombre = prompt("ingresa tu nombre")
nodoTitulo.innerText = `Bienvenid@ ${nombre} que tengas un buen dia`;//modificamos el texto interno del nodo. Podemos usar Template Strings o plantillas literales.


//modifico el css de nodoTitulo
nodoTitulo.style.color = 'red';
nodoTitulo.style.fontFamily = 'monospace';
nodoTitulo.style.backgroundColor = 'grey';

//tomamos el nodo del footer
const nodoFooter = document.getElementById('pie');
console.log(nodoFooter.innerHTML);
nodoFooter.innerHTML += `<button class='btn'>Ocultar Automoviles</button>`;

//otra forma de tomar nodos del dom a traves del nombre de la etiqueta
const liPaises = document.getElementsByTagName('li');
console.log(liPaises);
console.log(liPaises[2]);

liPaises[2].innerText = 'Argentina';
liPaises[2].style.color = 'green';

//recorrer HTMLCOLLECTION 
for (const li of liPaises) {
    console.log(li);
    li.style.fontFamily = 'monospace';
}

//otra forma de tomar nodos del dom a traves del nombre de la class
const nodosBotones = document.getElementsByClassName('btn');
console.log(nodosBotones)
console.log(nodosBotones[0].innerText);

//lista de objetos literales automoviles
const listaAutos = [
    {
        marca: 'Mercedes',
        modelo: 'Clase C',
        precio: 1000000
    },
    {
        marca: 'Mercedes',
        modelo: 'Clase E',
        precio: 1200000
    },
    {
        marca: 'Mercedes',
        modelo: 'Clase G',
        precio: 1500000
    },
    {
        marca: 'Mercedes',
        modelo: 'Clase S',
        precio: 2000000
    },
    {
        marca: 'VW',
        modelo: 'Amarok',
        precio: 2000000
    }
]

const seccionAutomoviles = document.getElementById('automoviles');

function renderizarAutos() {
    listaAutos.forEach(auto => seccionAutomoviles.innerHTML += `
        <div class='card'>
            <h3>Marca: ${auto.marca}</h3>
            <p>Modelo: ${auto.modelo}</p>
            <p>Precio: $ ${auto.precio}</p>
        </div>
        `)
}

//renderizarAutos();

//eventos de tipo click
// Hay 3 maneras de trabajar con eventos

// 1) utilizando .addEventListener()

nodosBotones[0].addEventListener('click', () => {
    renderizarAutos();
});

nodosBotones[1].addEventListener('click', () => {
    seccionAutomoviles.innerHTML = '';
});


// 2) utilizando la propiedad onclick

nodosBotones[2].onclick = () => {
    alert('Mostrando un alert!');
}

// 3 directamente agregar el evento en el HTML - menos recomendada
let darkMode = false;

function toggleMode() {
    //pasar a dark
    if (!darkMode) {
        changeToDark()
    } else {
        changeToLight()
    }
}

//toggle button

function changeToDark() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    nodosBotones[3].innerText = 'Cambiar a modo claro 🌞';
    darkMode = true;
}

function changeToLight() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    nodosBotones[3].innerText = 'Cambiar a modo oscuro 🌓';
    darkMode = false;
}