/* Los primeros 9 botones solo deja tocarlos en el borde los demas en cualquier lado */

const nodoRegistro = document.getElementById('registro');
let usuario = localStorage.getItem("nombre");

// Si no hay nombre guardado, pedirlo con while
if (!usuario) {
    usuario = prompt("¡¡Regístrate con tu nombre!!");


    while (!usuario || usuario.trim().length === 0) {
        alert("¡¡Si no te registras te perderás de los descuentos!!");
        usuario = prompt("Por favor, ingresa tu nombre para registrarte:");
    }
    nodoRegistro.innerText = `¡Hola  ${usuario}!`;

    // Limpiar y guardar
    usuario = usuario.trim();
    localStorage.setItem("nombre", usuario);
    alert("¡¡Bienvenid@, " + usuario + ", a mi tienda de ropa!!");
} else {
    alert("¡Hola de nuevo, " + usuario + "!");
    nodoRegistro.innerText = `¡Hola  ${usuario}!`;
}
const CierreSession = document.getElementById('Cerrar');
CierreSession.addEventListener('click', function () {
    let Cerrar = prompt("¿Estas de acuerdo en cerrar tu session?")
    if (Cerrar === "si" || Cerrar === "Si" || Cerrar === "sI" || Cerrar === "SI") {
        localStorage.removeItem("nombre")
        alert("¡¡Tu session a sido borrada ya no recibiras descuentos!!")
        nodoRegistro.innerText = `Registro`
    } else if (Cerrar === "no" || Cerrar === "No" || Cerrar === "nO" || Cerrar === "NO") {
        alert("¡¡Tu sesion sigue iniciada, y recibiste un descuento!! ")
    } else {
        alert("Ingreso no valido por favor ingrese si o no")
    }
});



const productos = [
    { nombre: "Jean Campana Azul Tiro Bajo", precio: 1499 },
    { nombre: "Jean Recto Azul Lavado Tiro Bajo", precio: 1000 },
    { nombre: "Jean recto Negro Tiro Medio", precio: 1200 },
    { nombre: "Jean baggy ancho Celeste Lavado tiro alto", precio: 1299 },
    { nombre: "Jean campana Celeste Lavado Tiro bajo", precio: 999 },
    { nombre: "Jean recto Azul Tiro alto", precio: 1899 },
    { nombre: "Jean Baggy Beige Tiro Alto", precio: 2000 },
    { nombre: "Jean Recto Negro Tiro Alto", precio: 1500 },
    { nombre: "Jean Recto Azul Lavado Tiro Alto", precio: 1200 },
    { nombre: "jean Recto Celeste Lavado Tiro Alto", precio: 1000 },
    { nombre: "Jean Baggy Azul Lavado Tiro Medio", precio: 799 },
    { nombre: "Jean Recto Celeste Lavado Tiro Alto", precio: 2199 }
];

let carrito = [];
const contador = document.getElementById("contador-carrito");


const botones = document.getElementsByClassName('btn-comprar');
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        let confirmar = prompt(`¿Quieres comprar este pantalón ${productos[i].nombre}? (si/no)`).toLowerCase();

        if (confirmar === "si") {
            carrito.push(productos[i]);
            localStorage.getItem("productos")
            contador.innerText = carrito.length;
            alert(`${productos[i].nombre} agregado al carrito.`);
        } else if (confirmar === "no") {
            alert(`Cancelaste la compra de ${productos[i].nombre}`);
        } else {
            alert("Por favor responde con 'si' o 'no'.");
        }
    });
}



