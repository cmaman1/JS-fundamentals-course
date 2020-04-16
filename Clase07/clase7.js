var caro = {
    nombre: 'Carolina',
    apellido: 'Mamani',
    edad: 25
}

var maca = {
    nombre: 'Macarena',
    apellido: 'Mamani',
    edad: 23
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad (persona) {
    var { nombre, edad } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreEnMayusculas(caro);
imprimirNombreEnMayusculas(maca);
imprimirNombreEnMayusculas({ nombre: 'Pepito' });

imprimirNombreYEdad(caro);
imprimirNombreYEdad(maca)