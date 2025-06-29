

const nodoRegistro = document.getElementById('registro');
let usuario = localStorage.getItem("nombre");

if (!usuario) {
    Swal.fire({
        title: "Ingresa tu nombre de usuario",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Enviar",
        showLoaderOnConfirm: true,
        cancelButtonText: "Cancelar",
        inputValidator: (data) => {
            if (!data || data.trim().length === 0) {
                return '¡El nombre no puede estar vacío!';
            }
        }

    }).then((result) => {
        if (result.isConfirmed) {
            usuario = result.value.trim();
            localStorage.setItem("nombre", usuario);
            nodoRegistro.innerText = `${usuario}`;

            Swal.fire({
                title: `¡¡Bienvenid@, ${usuario}, a mi tienda de ropa!!`,
                icon: "success",
                confirmButtonColor: "#fa699d"
            })
        }
    });
} else {
    Swal.fire({
        title: "Bienvenidx de nuevo " + usuario,
        confirmButtonText: "¡Hola!",
        confirmButtonColor: "#fa699d",
        timer: 2000
    });
    nodoRegistro.innerText = `${usuario}`;
}

const CierreSession = document.getElementById('Cerrar');
CierreSession.addEventListener('click', function () {
    Swal.fire({
        title: "Estas Segurx de cerrar session?",
        text: "Ya no recibiras descuentos",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: " #c0392b",
        cancelButtonColor: "#7dcea0",
        confirmButtonText: "Si, cerrar session",
        timer: 5500

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Tu sesion se ha cerrado",
                icon: "success",
                confirmButtonColor: "#fa699d "
            });
            nodoRegistro.innerText = `Registro`;
            localStorage.removeItem("nombre", usuario);

        } else {
            Swal.fire({
                title: "Tu sesion no se ha cerrado",
                icon: "success",
                confirmButtonColor: "#fa699d ",
                timer: 1500
            })
        }
    });
});



const productos = [
    { nombre: "Jean Acampanado Azul Tiro Bajo", precio: 1499 },
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
        let confirmas = Swal.fire({
            title: `¿Añadir ${productos[i].nombre} talle tal al carrito?`,
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Añadir",
            confirmButtonColor: "#7dcea0",
            cancelButtonColor: " #c0392b",

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `${productos[i].nombre} añadido al carrito`,
                    icon: "success",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#fa699d ",
                });
                carrito.push(productos[i]);
                localStorage.getItem("productos")
                contador.innerText = carrito.length;

            } {
                Swal.fire({
                    title: `Cancelaste la compra de ${pantalon[i].nombre}`,
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#fa699d ",

                })
            }
        })
    });
};





