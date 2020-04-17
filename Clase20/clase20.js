var caro = {
    nombre: 'Carolina',
    apellido:'Mamani',
    altura: 1.51,
    cantidadDeLibros: 50
}

var maca = {
    nombre: 'Macarena',
    apellido: 'Mamani',
    altura: 1.60,
    cantidadDeLibros: 12
}

var juli = {
    nombre: 'Julian',
    apellido: 'Aleman',
    altura: 1.82,
    cantidadDeLibros: 44
}

var pau = {
    nombre: 'Paula',
    apellido: 'Barrios',
    altura: 1.80,
    cantidadDeLibros: 31
}

var nico = {
    nombre: 'Nicolas',
    apellido: 'Gomez',
    altura: 1.75,
    cantidadDeLibros: 15
}

var personas = [caro, maca, juli, nico, pau];

// var acum = 0;

// for (var i = 0; i < personas.length; i++) {
//     acum += personas[i].cantidadDeLibros;
// }

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);