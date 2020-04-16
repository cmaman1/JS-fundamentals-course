var nombre = 'Carolina', apellido = 'Mamani';

//Si queremos convertir el string en mayusculas usamos toUpperCase
var nombreEnMayusculas = nombre.toUpperCase();

//Si queremosconvertir el string en minusculas usamos toLowerCase
var apellidoEnMinusculas = apellido.toLowerCase();

//Si queremos acceder a un caracter dentro de un string
var primeraLetraDelNombre = nombre.charAt(0);

//Para obtener la cantidad de letras del string usamos el atributo length
var cantidadDeLetrasDelNombre = nombre.length;


//Interpolacion de texto

/* var nombreCompleto = nombre + ' ' + apellido; */

var nombreCompleto= `${nombre} ${apellido.toUpperCase()}`;


//Para extraer un string mas pequeño delcontenido de un string usamos el metodo substr

var str = nombre.substr(1,2);