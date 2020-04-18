//Constructor
function Persona (nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    if (esAlto(this)) {
        console.log('Soy alto.')
    } else {
        console.log('No soy alto.')
    }
}

const esAlto = (persona) => persona.altura >= 1.80;

//crea un nuevo objeto con el prototipo de persona
var caro = new Persona('Carolina', 'Mamani', 1.51);

var erika = new Persona ('Erika', 'Luna', 1.70);

var arturo = new Persona ('Arturo', 'Martinez', 1.83);