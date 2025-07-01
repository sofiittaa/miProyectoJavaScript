

const nodoRegistro = document.getElementById('registro');
let usuario = localStorage.getItem("nombre");
const nodoSesion = document.getElementById('Iniciar');
let carrito = JSON.parse(localStorage.getItem("productos")) || [];


const contador = document.getElementById("contador-carrito");

if (contador) {
    contador.innerText = carrito.length;
}

if (usuario) {
    Swal.fire({
        title: "Bienvenidx de nuevo " + usuario,
        confirmButtonText: "¡Hola!",
        confirmButtonColor: "#000000"
    });
    nodoRegistro.innerText = usuario;
    nodoSesion.innerText = "Cerar Sesión";
} else {
    nodoRegistro.innerText = "";
    nodoSesion.innerText = "Iniciar Sesion";
}




const IniciarSesion = document.getElementById('Iniciar');
IniciarSesion.addEventListener('click', function () {
    if (!usuario) {
        Swal.fire({
            title: "Ingresa tu nombre de usuario",
            input: "text",
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

                Swal.fire({
                    title: `¡¡Bienvenid@, ${usuario}, a mi tienda de ropa!!`,
                    icon: "success",
                    confirmButtonColor: "#fa699d"
                });
            }
        });
        nodoSesion.innerText = "Cerrar Sesión";
    } else {
        Swal.fire({
            title: "¿Estás segurx de cerrar sesión?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#c0392b",
            cancelButtonColor: "#7dcea0",
            confirmButtonText: "Sí, cerrar sesión"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("nombre");
                localStorage.removeItem("productos");
                nodoRegistro.innerText = "Registrarse";
                if (contador) contador.innerText = "0";
                Swal.fire({
                    title: "Tu sesión se ha cerrado",
                    icon: "success",
                    confirmButtonColor: "#fa699d"
                });
                nodoSesion.innerText = "Iniciar Sesión";
            } else {
                Swal.fire({
                    title: "Tu sesión sigue activa",
                    icon: "info",
                    confirmButtonColor: "#fa699d"
                });
            }
        });
    }
});


CierreSession.addEventListener('click', function () {
    Swal.fire({
        title: "¿Estás segurx de cerrar sesión?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#c0392b",
        cancelButtonColor: "#7dcea0",
        confirmButtonText: "Sí, cerrar sesión"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("nombre");
            nodoRegistro.innerText = `Registrarse`;
            nodoSesion.innerText = `Iniciar Sesion`
            Swal.fire({
                title: "Tu sesión se ha cerrado",
                icon: "success",
                confirmButtonColor: "#fa699d"
            });
        } else {
            Swal.fire({
                title: "Tu sesión sigue activa",
                icon: "info",
                confirmButtonColor: "#fa699d"
            });
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
                carrito.push(productos[i]);
                localStorage.setItem("productos", JSON.stringify(carrito));
                contador.innerText = carrito.length;
                Swal.fire({
                    title: `${productos[i].nombre} añadido al carrito`,
                    icon: "success",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#fa699d ",
                });
            } else {
                Swal.fire({
                    title: `Cancelaste la compra de ${productos[i].nombre}`,
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#fa699d ",

                });
            }
        });
    });
}







