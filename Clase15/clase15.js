/*
 * do while es otra estructura iterativa similar al while, con la diferencia de que la accion se ejecuta una vez antes de evaluarse la expresion condicional. 
 */


var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve());

if (contador == 1) {
    console.log(`Fui a ver si llovia ${contador} vez`);
} else {
    console.log(`Fui a ver si llovia ${contador} veces`);
}