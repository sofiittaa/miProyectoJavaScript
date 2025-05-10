/* ------------------------------------------------------- ACTIVIDAD PRACTICA 3 ------------------------------------------------------- */



/* function reservarHabitacion() {


    let noches = prompt("El precio por noche es de 20$. ¿Cuántas noches se quedará?");
    let tipo = prompt("¿Qué tipo de habitación le gustaría?");


}
reservarHabitacion();

function calcularNoches(noches, precioNoche) {
    return noches * precioNoche;
}
calcularNoches();

console.log(`Ha reservado ${noches} noche(s) en una habitación tipo "${tipo}" por tan solo ${calcularNoches}.`);

reservarHabitacion(); */


function calcularNoches(noches, precioNoche) {
    return noches * precioNoche;
}

function reservarHabitacion() {
    let precioPorNoche = 20;
    let noches = prompt("El precio por noche es de 20$. ¿Cuántas noches se quedará?");
    noches = parseInt(noches); // Convertir a número
    let tipo = prompt("¿Qué tipo de habitación le gustaría?");

    let total = calcularNoches(noches, precioPorNoche);

    console.log(`Ha reservado ${noches} noche(s) en una habitación tipo ${tipo} por tan solo ${total}$.`);
}

reservarHabitacion();





