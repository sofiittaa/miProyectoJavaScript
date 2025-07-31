
export const formulario = document.getElementById("formulario");

let carrito = JSON.parse(localStorage.getItem("productos")) || [];
export let contador = document.getElementById("contador-carrito");
const nodoRegistro = document.getElementById('registro');
export let usuario = localStorage.getItem("nombre") || "";
export let gmail = localStorage.getItem("gmail") || "";
const nodoSesion = document.getElementById('btn-sesion');
export const nodoCarrito = document.querySelectorAll('carrito');
export const nodosCarrito = document.querySelectorAll('.pro ');



if (contador) {
    contador.innerText = carrito.length;
}

actualizar();

function actualizar() {
    if (usuario) {
        Swal.fire({
            title: `Bienvenidx de nuevo ${usuario} `,
            confirmButtonText: "¡Hola!",
            confirmButtonColor: "rgb(255, 125, 44)",
            width: 600,
            padding: "5em",
            background: "#fff url('../assets/img/fondoSweet.png')",
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

if (nodoSesion) {
    nodoSesion.addEventListener('click', function () {

        if (!usuario) {
            Swal.fire({
                title: "¡Regístrate!",
                html: `<input type="text" id="swal-nombre" class="swal2-input" placeholder="Nombre">
                <input type="text" id="swal-gmail" class="swal2-input" placeholder="Gmail">`,
                confirmButtonText: "Enviar",
                cancelButtonText: "Cancelar",
                confirmButtonColor: " #619ddd",
                cancelButtonColor: "rgb(236, 143, 57)",
                customClass: {
                    title: 'titulo-personalizado',
                    content: 'texto-personalizado'
                },

                width: 600,
                padding: "5em",
                background: "#fff url('../assets/img/fondoSweet.png')",
                showCancelButton: true,
                focusConfirm: false,
                preConfirm: () => {
                    const nombre = document.getElementById('swal-nombre').value.trim();
                    const gmail = document.getElementById('swal-gmail').value.trim();

                    if (!nombre || !gmail) {
                        Swal.showValidationMessage('Por favor, completá todos los campos');
                        return false;
                    }

                    return { nombre, gmail };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    usuario = result.value.nombre;
                    gmail = result.value.gmail;
                    localStorage.setItem("nombre", usuario);
                    localStorage.setItem("gmail", gmail);
                    nodoRegistro.innerText = `${usuario}`;

                    nodoSesion.innerText = "Cerrar Sesión";
                    Swal.fire({
                        title: `¡¡Bienvenidx ${usuario} a mi tienda de ropa!!`,
                        icon: "success",
                        confirmButtonColor: " #619ddd",
                        customClass: {
                            title: 'titulo-personalizado',
                            content: 'texto-personalizado'
                        },

                        width: 600,
                        padding: "5em",
                        background: "#fff url('../assets/img/fondoSweet.png')",
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
                background: "#fff url('../assets/img/fondoSweet.png')",
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
                        },
                        width: 600,
                        padding: "5em",
                        background: "#fff url('../assets/img/fondoSweet.png')",
                    });


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
                        background: "#fff url('../assets/img/fondoSweet.png')",
                    });
                }
                actualizar();
            });
        }
    });

}
if (nodosCarrito.length > 0) {
    for (let i = 0; i < nodosCarrito.length; i++) {
        nodosCarrito[i].addEventListener('click', function () {
            if (carrito.length === 0) {
                Swal.fire({
                    title: "Carrito vacío ",
                    text: "Agregá algo a tu carrito primero",
                    icon: "info",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#619ddd",
                    customClass: {
                        title: 'titulo-personalizado',
                        content: 'texto-personalizado'
                    },
                    width: 600,
                    padding: "5em",
                    background: "#fff url('../assets/img/fondoSweet.png')",
                });
            } else {

                Swal.fire({
                    title: "Carrito de compras",
                    colorText: "#0000",
                    text: `Productos:
                        ${carrito.map(producto => `${producto.nombre} - $${producto.precio}  `).join('')}`,
                    icon: "info",
                    showCancelButton: true,
                    confirmButtonText: "Comprar",
                    confirmButtonColor: "#619ddd",
                    cancelButtonText: "Vaciar carrito",
                    cancelButtonColor: "rgb(236, 143, 57)",
                    customClass: {
                        title: 'titulo-personalizado',
                        content: 'texto-personalizado'
                    },
                    width: 600,
                    padding: "5em",
                    background: "#fff url('../assets/img/fondoSweet.png')",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Completa los datos para finalizar la compra ",
                            text: "↓ ↓",
                            icon: "success",
                            confirmButtonColor: " #ec652bff",
                            customClass: {
                                title: 'titulo-personalizado',
                                content: 'texto-personalizado',
                            },
                            width: 600,
                            padding: "5em",
                            background: "#fff url('../assets/img/fondoSweet.png')",
                        });

                    } else if (result.dismiss) {

                        carrito = [];
                        localStorage.removeItem("productos");
                        if (contador) contador.innerText = "0";
                        Swal.fire({
                            title: "Carrito vaciado",
                            icon: "success",
                            confirmButtonColor: "#619ddd",
                            background: "#fff url('../assets/img/fondoSweet.png')",
                            customClass: {
                                title: 'titulo-personalizado',
                                content: 'texto-personalizado',
                            },
                            width: 600,
                            padding: "5em",
                        });
                    }
                });
            }
        }
        );
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("gmail").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

    if (carrito.length === 0) {
        Swal.fire({
            title: "Carrito vacio",
            text: "Por favor, añade productos a tu carrito ",
            icon: "warning",
            confirmButtonColor: "#ec652bff",
            background: "#fff url('../assets/img/fondoSweet.png')",
            width: 600,
            padding: "5em",
            customClass: {
                title: 'titulo-personalizado',
                content: 'texto-personalizado'
            }
        });
        return;
    }

    Swal.fire({
        title: "¡Gracias por tu compra!",
        text: `${nombre} tus productos serán enviados a ${direccion} en un plazo de 3 a 5 días hábiles, en cuanto el pedido este en tu puerta, te llamaremos a ${telefono}.`,
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#619ddd",
        background: "#fff url('../assets/img/fondoSweet.png')",
        width: 600,
        padding: "5em",
        customClass: {
            title: 'titulo-personalizado',
            content: 'texto-personalizado'
        }
    });

    localStorage.removeItem("productos");

    if (contador) contador.innerText = "0";

});













