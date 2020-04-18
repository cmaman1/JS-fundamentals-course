const API_URL = 'https://pokeapi.co/api/v2/'
const PEOPLE_URL = 'pokemon/:id'

const bulbasaurUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

const opts = { crossdomain: true }

const onBulbasaurResponse =  function (pokemon) {
    console.log(`Hola! Yo soy ${pokemon.name}, un pokemon del tipo ${pokemon.types[0].type.name} y ${pokemon.types[1].type.name}.`);
}

$.get(bulbasaurUrl, opts, onBulbasaurResponse);

