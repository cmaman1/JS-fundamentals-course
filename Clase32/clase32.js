const API_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/:id';
const options = { crossdomain: true };


function obtenerPokemon(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`;

        $
        .get(url, options, function(data) {
            resolve(data);
        })
        .fail( () => {
            reject(id)
        });
    }); 
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

for (var i = 1; i <= 999; i++) {
    obtenerPokemon(i)
        .then(function (pokemon){
        console.log(`El personaje ${pokemon.id} es ${pokemon.name}`)
        })
        .catch(onError);
}