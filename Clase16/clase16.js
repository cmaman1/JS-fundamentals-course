/*
* Switch es otra estructura de control iterativa que permite evaluar un dato para que determine si cumple con algunas de las condiciones determinadas para realizar una accion dada.
*/

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

var signo = removeAccents(prompt('¿Cual es tu signo?').toLowerCase());

switch (signo) {
    case 'aries':
        console.log('Sería bueno que acepte los consejos que recibe de la gente que lo quiere, evite negarse. Sepa que lo ayudarán a cambiar su forma de pensar y actuar.');
        break;
    case 'tauro':
        console.log('Relájese, ya que será una jornada donde su espontaneidad será bien recibida. No deje pasar el tiempo y exprese sus emociones en el momento oportuno.      ');
        break;
    case 'geminis':
        console.log('Sería bueno que aprenda y cambie la manera en que enfrenta la vida a diario. Comience a disfrutar de lo que tiene y no se haga tanto problema.        ');
        break;
    case 'cancer':
        console.log('Intente conservar una sola dirección y ponga toda su energía en lo que realmente quiere. De esta forma, podrá alcanzar lo que desea con rapidez.');
        break;
    case 'leo':
        console.log('Anímese y comience a interpretar los mensajes de sus propios sueños. Sepa que esto lo ayudará a conocerse mejor y a que sintonice con su inconsciente.');
        break;
    case 'virgo':
        console.log('Seguramente en esta jornada, se le presentará una situación y deberá buscar una solución inmediata a ese conflicto. Trate de no involucrarse.');
        break;
    case 'libra':
        console.log('Lo más recomendable para esta jornada cuando intente comunicarse con alguien, será que busque un diálogo conciliador sin confrontar a la gente que lo rodea.')
        break;
    case 'escorpio':
        console.log('Intente pensar en usted. Destínese tiempo para poder terminar esa carrera que hace tiempo comenzó y por diversas situaciones no pudo finalizar.');
        break;
    case 'sagitario':
        console.log('Cuando deba dar una opinión de alguna persona, trate de censurar menos y no juzgar a los demás sin conocerlos. Abandone esa posición autoritaria que tiene.');
        break;
    case 'capricornio':
        console.log('Durante esta jornada, obtendrá la energía necesaria para poder emprender lo que siempre quiso y no pudo. Vaya detrás del objetivo que más le interese.');
        break;
    case 'acuario':
        console.log('Haga lo posible para desprenderse de aquello que le hace mal a su vida. Elija nuevos rumbos y vivirá una etapa de renovación interna muy enriquecedora.');
        break;
    case 'piscis':
        console.log('Comprenda que utilizar pensamientos claros y desapegados podrá resolver rápidamente todos los problemas cotidianos que está teniendo hace días.');
        break;
    default:
        console.log('No es un signo zodiacal valido!');
        break;
}