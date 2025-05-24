const productos = [
    { nombre: "Flared Jean Tiro Bajo", precio: 999 },
    { nombre: "Jean recto Tiro bajo", precio: 1499 }
];

const botones = document.getElementsByClassName('btn-comprar');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        let confirmar = prompt(`¿Quieres comprar este pantalón ${productos[i].nombre}? (si/no)`);

        if (confirmar === "si" || confirmar === "Si") {
            console.log(`${productos[i].nombre} agregado al carrito.`);
            alert(`${productos[i].nombre} agregado al carrito.`);
        } else if (confirmar === "no" || confirmar === "No") {
            console.log(`Cancelaste la compra de ${productos[i].nombre}`);
            alert(`Cancelaste la compra de ${productos[i].nombre}`);
        } else {
            console.log("Respuesta no válida.");
            alert("Por favor responde con 'si' o 'no'.");
        }
    });
}