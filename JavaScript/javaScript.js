const nodoRegistro = document.getElementById('registro');
let usuario = localStorage.getItem("nombre");
const nodoSesion = document.getElementById('Iniciar');
let carrito = JSON.parse(localStorage.getItem("productos")) || [];

const contador = document.getElementById("contador-carrito");

if (contador) {
    contador.innerText = carrito.length;
}

actualizar();

function actualizar() {
    const nodoSesion = document.getElementById('Iniciar') || document.getElementById('Cerrar');
    const nodoRegistro = document.getElementById('registro');
    const contador = document.getElementById("contador-carrito");

    if (usuario) {
        Swal.fire({
            title: `Bienvenidx de nuevo ${usuario}`,
            confirmButtonText: "¡Hola!",
            confirmButtonColor: "rgb(255, 125, 44)",
            width: 600,
            padding: "5em",
            background: "#fff url(BajaVibe/img/fondoSweet.png)",
            customClass: {
                title: 'titulo-personalizado',
                content: 'texto-personalizado'
            },
        });

        if (nodoRegistro) nodoRegistro.innerText = usuario;
        if (nodoSesion) nodoSesion.innerText = "Cerrar Sesión";

    } else {
        if (nodoRegistro) nodoRegistro.innerText = "Registrarse";
        if (nodoSesion) nodoSesion.innerText = "Iniciar Sesión";
        if (contador) contador.innerText = "0";
    }
}

nodoSesion.addEventListener('click', function () {
    if (!usuario) {
        Swal.fire({
            title: "Ingresa tu nombre de usuario",
            input: "text",
            customClass: {
                title: 'titulo-personalizado',
                content: 'texto-personalizado'
            },
            confirmButtonColor: " #619ddd",
            cancelButtonColor: "rgb(236, 143, 57)",
            width: 600,
            padding: "5em",
            background: "#fff url(BajaVibe/img/fondoSweet.png)",
            showCancelButton: true,
            confirmButtonText: "Enviar",
            cancelButtonText: "Cancelar",
            inputValidator: (value) => {
                if (!value || value.trim().length === 0) {
                    return 'No podés dejar el nombre vacío ';
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                usuario = result.value.trim();
                localStorage.setItem("nombre", usuario);
                nodoRegistro.innerText = `${usuario}`;
                nodoSesion.innerText = "Cerrar Sesión";
                Swal.fire({
                    title: `¡¡Bienvenid@, ${usuario}, a mi tienda de ropa!!`,
                    icon: "success",
                    confirmButtonColor: " #619ddd",
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

    } else {
        Swal.fire({
            title: "¿Estás segurx de cerrar sesión?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: " #c0392b",
            cancelButtonColor: "rgb(236, 143, 57)",
            confirmButtonText: "Sí, cerrar sesión",
            customClass: {
                title: 'titulo-personalizado',
                content: 'texto-personalizado'
            },
            confirmButtonColor: " #619ddd",
            width: 600,
            padding: "5em",
            background: "#fff url(BajaVibe/img/fondoSweet.png)",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("nombre");
                usuario = null;
                localStorage.removeItem("productos");
                nodoRegistro.innerText = "Registrarse";

                nodoSesion.innerText = "Iniciar Sesión"


                if (contador) contador.innerText = "0";
                Swal.fire({
                    title: "Tu sesión se ha cerrado",
                    icon: "success",
                    confirmButtonColor: " #c0392b",
                    customClass: {
                        title: 'titulo-personalizado',
                        content: 'texto-personalizado',
                        width: 600,
                        padding: "5em",
                        background: "#fff url(BajaVibe/img/fondoSweet.png)",
                    },
                });
                nodoRegistro = "Registrarse"

            } else {
                Swal.fire({
                    title: "Tu sesión sigue activa",
                    icon: "info",
                    confirmButtonColor: "rgb(252, 117, 55)",
                    customClass: {
                        title: 'titulo-personalizado',
                        content: 'texto-personalizado',
                    },
                    width: 600,
                    padding: "5em",
                    background: "#fff url(BajaVibe/img/fondoSweet.png)",
                });
            }
            actualizar();
        });
    }

});


/* import { act } from 'react'; */
/* import { productos } from './js.js'; */

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.getElementsByClassName('btn-comprar');
    console.log("botones.length:", botones.length);

    botones[0]?.addEventListener("click", () => {
        console.log("CLICK EN EL BOTÓN 🛍️");
        Swal.fire({
            title: "¿Añadir este jean al carrito?",
            icon: "question",
            confirmButtonText: "Sí, obvio",
            cancelButtonText: "No, me arrepentí",
        });
    });
});



