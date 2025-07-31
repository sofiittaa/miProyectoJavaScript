
let carrito = JSON.parse(localStorage.getItem("productos")) || [];
let usuario = localStorage.getItem("nombre") || "Clientaza";
let contador = document.getElementById("contador-carrito");
let productos = [];
const tallesElegidos = {};

contador.textContent = carrito.length;


Swal.fire({
    title: `¡Hola ${usuario}!`,
    text: "Elegí tu jean favorito y el talle perfecto",
    confirmButtonColor: "#fc7e30ff",
    background: "#fff url('../assets/img/fondoSweet.png')",
    customClass: {
        title: 'titulo-personalizado',
        content: 'texto-personalizado',
    },
});

async function cargarProductos() {
    try {
        const res = await fetch("../JSON/productos.json");
        if (!res.ok) throw new Error("No se pudo cargar el archivo JSON");
        productos = await res.json();
    } catch (error) {
        Swal.fire({
            title: "Error al cargar productos",
            text: error.message,
            icon: "error",
            confirmButtonColor: "#fc7e30ff",
            background: "#fff url('../assets/img/fondoSweet.png')",
            customClass: {
                title: 'titulo-personalizado',
                content: 'texto-personalizado',
            },
        });
    }
}

{
    document.querySelectorAll('.talle-btn').forEach((boton) => {
        const id = boton.dataset.id;
        boton.addEventListener("click", () => {
            Swal.fire({
                title: "Selecciona un talle",
                input: "select",
                inputOptions: { s: 'S', m: 'M', l: 'L', xl: 'XL' },
                inputPlaceholder: 'Selecciona un talle',
                confirmButtonColor: "#fc7e30ff",
                background: "#fff url('../assets/img/fondoSweet.png')",
                customClass: {
                    title: 'titulo-personalizado',
                    content: 'texto-personalizado',
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    tallesElegidos[id] = result.value;
                }
            });
        });
    });

    document.querySelectorAll('.btn-comprar').forEach((boton) => {
        const id = boton.dataset.id;
        boton.addEventListener("click", () => {
            const producto = productos.find(p => p.id == id);
            const talle = tallesElegidos[id];

            if (!talle) {
                return Swal.fire({
                    title: "Selecciona un talle antes de comprar",
                    icon: "warning",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#619ddd",
                    background: "#fff url('../assets/img/fondoSweet.png')",
                    customClass: {
                        title: 'titulo-personalizado',
                        content: 'texto-personalizado',
                    },
                });
            }

            Swal.fire({
                title: `${producto.nombre} talle ${talle} añadido al carrito por $${producto.precio}`,
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Añadir al carrito",
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#619ddd",
                cancelButtonColor: "rgba(235, 141, 53, 1)",
                background: "#fff url('../assets/img/fondoSweet.png')",
                customClass: {
                    title: 'titulo-personalizado',
                    content: 'texto-personalizado',
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    carrito.push({ ...producto, talle });
                    localStorage.setItem("productos", JSON.stringify(carrito));
                    contador.textContent = carrito.length;
                } else {
                    Swal.fire({
                        title: `Cancelaste la compra de ${producto.nombre}`,
                        icon: "error",
                        confirmButtonText: "Ok",
                        confirmButtonColor: "#619ddd",
                        background: "#fff url('../assets/img/fondoSweet.png')",
                        customClass: {
                            title: 'titulo-personalizado',
                            content: 'texto-personalizado',
                        },
                    });
                }
            });
        });
    });
}



cargarProductos();
