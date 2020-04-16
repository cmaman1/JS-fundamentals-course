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

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(caro);
imprimirNombreEnMayusculas(maca);
imprimirNombreEnMayusculas({ nombre: 'Pepito' });