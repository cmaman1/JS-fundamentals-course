/*
 * El for nos va a permitir realizar una tarea repetitiva una cantidad de veces determinadas
 */

var caro = {
     nombre: 'Carolina',
     apellido: 'Mamani',
     edad: 25,
     peso: 45
 }

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_AÑO = 365;

console.log(`Al inicio del año ${caro.nombre} pesa ${caro.peso}kg`);

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO;

const bajarDePeso = (persona) => persona.peso -= INCREMENTO_PESO;

for (var i = 0; i < DIAS_DEL_AÑO; i++) {
    var random = Math.random();

    if (random < 0.25) {
        aumentarDePeso(caro);
    } else if (random < 0.5) {
        bajarDePeso(caro);
    }
}

console.log(`Al final del año ${caro.nombre} pesa ${caro.peso.toFixed(1)}kg`);