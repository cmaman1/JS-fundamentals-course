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

var ids = [1, 2, 3 ,4, 5, 6, 7];

// var promesas (ids.map(function(id) {
//     return obtenerPokemon(id);
// }))

var promesas = ids.map(id => obtenerPokemon(id));

Promise
    .all(promesas)
    .then(pokemones => console.log(pokemones))
    .catch(onError);