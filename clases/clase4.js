//declaracion de arrays

// Array vacío
/* const arrayVacio = []; */

// Array con números
/* const numeros = [1, 2, 3]; */

// Array con strings
/* const colores = ["rojo", "verde", "azul"]; */

// Array con varios tipos de datos
/* const mixto = [1, "dos", true]; */

//llamar al array mediante lugares (del 0 al 2) en este caso
/* const frutas = ["manzana", "banana", "cereza"]; */

// Acceder al primer elemento
// console.log(frutas[0]);   // "manzana"

// Acceder al tercer elemento
// console.log(frutas[2]);  // "cereza"

let numeros = [1, 2, 3, 4, 5];

console.log(numeros[0]);



let palabras = ["auto", "frutilla", "gato", "UTU"]

console.log(palabras[2])

let colores = ["verde", "naranja", "azul", "amarillo"]

console.log(colores[2])

let booleanos = [true, false, true, false]

console.log(booleanos)

let matriz = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matriz[0][2])

// Supongamos que tenemos el siguiente array de números
const numeross = [10, 20, 30, 40, 50];

// Para recorrer este array usaremos un bucle for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeross[i]); // Esto imprimirá cada número del array en la consola
}

let animales = ["gato", "perro", "conejo", "hamster", "loro"]

console.log(animales[animales.length - 3])


// PUSH AÑADE UN METODO MAS AL ARRAY
// let frutaz = ['manzana', 'banana'];
// frutaz.push('zanahoria');
// console.log(frutaz);  // Salida: ['manzana', 'banana', 'naranja']


// POP ELIMINA CUALQUIER ELEMENTO DE UN ARRAY QUE QUIERAS
// let frutas = ['manzana', 'banana', 'naranja'];
// let frutaEliminada = frutas.pop();

// console.log(frutaEliminada);  // Salida: 'naranja'

// console.log(frutas);  // Salida: ['manzana', 'banana']

// ELIMINA EL PRIMER ELEMENTO DEL ARRAY Y DESPLAZA LOS ANTERIORES UN NUMERO -

// let frutasH = ['manzana', 'banana', 'naranja'];
// let primeraFruta = frutas.shift();
// console.log(primeraFruta); // Salida: 'manzana'
// console.log(frutasH); // Salida: ['banana', 'naranja']

// let frutasv = ['banana', 'naranja'];
// frutasv.unshift('manzana');
// console.log(frutasv);  // Salida: ['manzana', 'banana', 'naranja']

// INDEXOF BUSCA UN ELEMENTO ESPECIFICO DEL ARRAY Y PUEDE DIFERENCIAR ENTRE NUMEROS, STRINGS, ETC

// let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
// let indice = nombres.indexOf('Marta');
// console.log(indice);  // Salida: 2

// INCLUDES BUSCA UN ELEMENTO EN EL ARRAY Y MUESTRA TRUE SI ESTA EN EL ARRAY Y FALSE SI NO

// let frutas = ['manzana', 'naranja', 'banana'];
// let contiene = frutas.includes('manzana');
// console.log(contiene);  // Salida: true


// SORT de manera normal ordena los numeros en base al primer dijito,
// si le agregamos parametros como a,b => a-b los ordena de menor a mayor con todos sus digitos
// pero si ponemos en vez de a - b, b - a nos muestra los numeros de mayor a menor

let numeroz = [20, 13, 16, 89, 34, 200];

numeroz.sort((a, b) => a - b);

console.log(numeroz)

let palabrash = ["auto", "casa", "bola", "gato"];

palabras.sort((a, b) => a.localeCompare(b));

console.log(palabrash)

// SPLICE BORRA CUALQUIER ELEMENTO DE UN ARRAY

palabras.splice(2);
console.log(palabras)



// REVERSE invierte el orden 


numeroz.reverse();

console.log(numeroz);


// JOIN convierte arrays en cadenas de textos
let colorest = ['Rojo', 'Verde', 'Azul'];
let resultado = colorest.join();
console.log(resultado);  // "Rojo,Verde,Azul"

// ejemplo con espacios
let nombres = ['Ana', 'Juan', 'Carlos'];
let listaNombres = nombres.join(' ');
console.log(listaNombres);  // "Ana Juan Carlos"

// OBJETO LITERAL se separa con comas, y no se muestra con indices si no con su objeto definido ej si quiero mostarr juan , ponemos console.log(juan)

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires"
};

let arrayObjetos = [];
arrayObjetos.push({
    id: 1, nombre: "producto 1"
});
arrayObjetos.push({
    id: 2, nombre: "producto 2"
});

arrayObjetos.push({
    id: 3, nombre: "producto 3"
});

console.log(arrayObjetos)

// for of nos permite recorrer el array con datos asignados

for (let objeto of arrayObjetos) {
    console.log(objeto.nombre);
}



const usuarios = [];
usuarios.push({ nombre: "Ana", edad: 25 });
usuarios.push({ nombre: "Luis", edad: 30 });

console.log(usuarios);
// Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]

usuarios.sort((a, b) => a.edad - b.edad);
console.log(usuarios);
// Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]

const mayoresDe25 = usuarios.filter(usuario => usuario.edad > 25);
console.log(mayoresDe25);
// Resultado: [{ nombre: "Luis", edad: 30 }]


const luis = usuarios.find(usuario => usuario.nombre === "Luis");
console.log(luis);
// Resultado: { nombre: "Luis", edad: 30 }



const misAuriculares = {
    marca: 'Sony',
    modelo: 'XR12',
    color: 'negro,¿',
    precio: 1000,
    disponibilidad: true
}

console.log(misAuriculares);
console.log('mis auriculares salieron ' + misAuriculares.precio);

misAuriculares.precio = 1100;

console.log(misAuriculares);
/* ------------------------------------------------------- OBJETOS EN SEERIE USANDO CLASS ------------------------------------------------------- */

class pelicula {
    constructor(nombre, anio, director) {
        this.nombre = nombre;
        this.anio = anio;
        this.director = director;
    }
}

const peli1 = new pelicula('El señor de los anillos',
    2001, 'Petter Jackson');
console.log(peli1);



// PROYECTO FINAL
//  Armar la estructura basica de, simulador
/* Declarar variables,constantes y arrays

ciclos de iteracion como for, while , do while o switch  
integrar el uso de la consola JS propt,confirm y alert

Explicacion del proyecto , tiene que tener un index y un js si o si 
archivo en formato ZIP engtregable1+Furtado
usar propt alert para mostrarlo fuera de la consola

crear al menos 3 funciones que creen interaccion con el usuario
llamar a la funcion(console.log)..

estructura if y else para condiciones 


*/