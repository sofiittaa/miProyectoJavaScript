import { usuario, contador, carrito, } from '/JavaScript/globales.js';

if (contador) {
    contador.innerText = carrito.length;
}

actualizar();

function actualizar() {
    if (usuario) {
        Swal.fire({
            title: `Bienvenidx de nuevo ${usuario}`,
            confirmButtonText: "¡Hola!",
            confirmButtonColor: "rgb(255, 125, 44)",
            width: 600,
            padding: "5em",
            background: " #fff url(BajaVibe/img/fondoSweet.png)",
            customClass: {
                title: 'titulo-personalizado',
                content: 'texto-personalizado'
            },
        });
    }
}

const productos = [
    { nombre: "Jean Acampanado Azul Tiro Bajo", precio: 1499, talle: null },
    { nombre: "Jean Recto Azul Lavado Tiro Bajo", precio: 1000, talle: null },
    { nombre: "Jean recto Negro Tiro Medio", precio: 1200, talle: null },
    { nombre: "Jean baggy ancho Celeste Lavado tiro alto", precio: 1299, talle: null },
    { nombre: "Jean campana Celeste Lavado Tiro bajo", precio: 999, talle: null },
    { nombre: "Jean recto Azul Tiro alto", precio: 1899, talle: null },
    { nombre: "Jean Baggy Beige Tiro Alto", precio: 2000, talle: null },
    { nombre: "Jean Recto Negro Tiro Alto", precio: 1500, talle: null },
    { nombre: "Jean Recto Azul Lavado Tiro Alto", precio: 1200, talle: null },
    { nombre: "jean Recto Celeste Lavado Tiro Alto", precio: 1000, talle: null },
    { nombre: "Jean Baggy Azul Lavado Tiro Medio", precio: 799, talle: null },
];


const talleSeleccionado = document.querySelectorAll('.talle-btn');
talleSeleccionado.addEventListener("click", function () {
    if (talleSeleccionado) {
        talleSeleccionado.style.backgroundColor = "#800020";
        productos[i].talle = talleSeleccionado.textContent;
    } else {
        console.log("no existe tal boton")
    }
});



const botones = document.getElementsByClassName('btn-comprar');
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        Swal.fire({
            title: `¿Añadir ${productos[i].nombre} talle - por ${productos[i].precio} al carrito ?`,
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Añadir",
            confirmButtonColor: " #619ddd",
            cancelButtonColor: "rgb(236, 143, 57)",
            customClass: {
                title: 'titulo-personalizado',
                content: 'texto-personalizado'
            },
            width: 600,
            padding: "5em",
            background: "#fff url(BajaVibe/img/fondoSweet.png)",

        }).then((result) => {
            if (result.isConfirmed) {
                carrito.push(productos[i]);
                localStorage.setItem("productos", JSON.stringify(carrito));
                contador.innerText = carrito.length;
                Swal.fire({
                    title: `${productos[i].nombre} añadido al carrito `,
                    icon: "success",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "rgba(235, 141, 53, 1)",
                    customClass: {
                        title: 'titulo-personalizado',
                        content: 'texto-personalizado'
                    },
                    width: 600,
                    padding: "5em",
                    background: "#fff url(BajaVibe/img/fondoSweet.png)",
                });
            } else {
                Swal.fire({
                    title: ` Cancelaste la compra de ${productos[i].nombre}`,
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "rgba(235, 141, 53, 1)",
                    customClass: {
                        title: 'titulo-personalizado',
                        content: 'texto-personalizado'
                    },
                    width: 600,
                    padding: "5em",
                    background: "#fff url(BajaVibe/img/fondoSweet.png)",

                });
            }
        });
    });
}
