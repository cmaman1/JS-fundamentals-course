function Persona (nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar =  () => {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    if (esAlto(this)) {
        console.log('Soy alto.');
    } else {
        console.log('No soy alto.');
    }
}

Persona.prototype.soyAlto =  () => this.altura > 1.8;

var caro = new Persona('Carolina', 'Mamani', 1.51);

var erika = new Persona ('Erika', 'Luna', 1.70);

var arturo = new Persona ('Arturo', 'Martinez', 1.83);