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
    altura: 1.80
}

var nico = {
    nombre: 'Nicolas',
    apellido: 'Gomez',
    altura: 1.75
}

var personas = [caro, maca, juli, pau, nico];

const esAlta = (persona) => persona.altura >= 1.8;

const esBaja = (persona) => persona.altura < 1.8;

var personasAltas = personas.filter(esAlta);

var personasBajas = personas.filter(esBaja);

const pasarAlturaACms = (persona) => ({
    ...persona,
    altura: persona.altura * 100
});

var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);

console.log(personas);