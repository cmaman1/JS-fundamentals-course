const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const options = { crossdomain: true }

const onPokemonResponse =  function (pokemon) {
    console.log(`Hola! Yo soy ${pokemon.name}.`);
}

function obtenerPokemon(id) {
    const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`;
    $.get(url, options, onPokemonResponse);
}

for (var i = 1; i <= 500; i++) {
    obtenerPokemon(i);
}