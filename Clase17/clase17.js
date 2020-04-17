/*
* Los arrays son estructuras de datos que nos permiten agrupar distintos tipos de datos como objetos, strings, etc, dentro de una coleccion sobre la que podremos hacer operaciones.
*/

var caro = {
    nombre: 'Carolina',
    apellido:'Mamani',
    altura: 1.51
}

var maca = {
    nombre: 'Macarena',
    apellido: 'Mamani',
    altura: 1.60
}

var juli = {
    nombre: 'Julian',
    apellido: 'Aleman',
    altura: 1.82
}

var pau = {
    nombre: 'Paula',
    apellido: 'Barrios',
    altura: 1.70
}

var nico = {
    nombre: 'Nicolas',
    apellido: 'Gomez',
    altura: 1.75
}

var personas = [caro, maca, juli, pau, nico];

for (var i = 0; i < personas.length; i++) {
    console.log(`${personas[i].nombre} mide ${personas[i].altura}m`);
}