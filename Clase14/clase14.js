/*
 * Usamos while cuando tenemos una accion a ejecutarse mientras una condicion sea verdadera.
*/

var caro = {
    nombre: 'Carolina',
    apellido: 'Mamani',
    edad: 25,
    peso: 45
}

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_AÑO = 365;
const META = caro.peso - 3;

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO;
const bajarDePeso = (persona) => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

var dias = 0;

while (caro.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(caro);
    }
    if (realizaDeporte()) {
        bajarDePeso(caro);
    }
    dias++;
}

console.log(`Pasaron ${dias} dias hasta que ${caro.nombre} adelgazo 3kg.`);

