var caro = {
    nombre: 'Carolina',
    apellido: 'Mamani',
    edad: 25,
    ingeniera: false,
    cocinera: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`);

    if (persona.ingeniera == true) {
        console.log('Ingeniera');
    } else {
        console.log('No es ingeniera')
    }

    if (persona.cantante) {
        console.log('Cantante');
    }

    if (persona.guitarrista) {
        console.log('Guitarrista');
    }

    if (persona.drone) {
        console.log('Piloto de drone');
    }
}

imprimirProfesiones(caro);


/*
 * DESAFIO! HACER UNA FUNCION PARA DETERMINAR SI ES MAYOR DE EDAD
 */

function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} tiene ${persona.edad} años, por lo tanto es mayor de edad`);
    } else {
        console.log(`${persona.nombre} tiene ${persona.edad} años, por lo tanto no es mayor de edad`)
    }
}

imprimirSiEsMayorDeEdad(caro);