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

obtenerPokemon(1)
    .then((pokemon) => {
        console.log(`El personaje ${pokemon.id} es ${pokemon.name}`)
        
        return obtenerPokemon(2)
    })
    .then((pokemon) =>{
        console.log(`El personaje ${pokemon.id} es ${pokemon.name}`)
        
        return obtenerPokemon(3)
    })
    .then((pokemon) =>{
        console.log(`El personaje ${pokemon.id} es ${pokemon.name}`)
        
        return obtenerPokemon(4)
    })
    .then((pokemon) =>{
        console.log(`El personaje ${pokemon.id} es ${pokemon.name}`)
        
        return obtenerPokemon(5)
    })
    .then((pokemon) =>{
        console.log(`El personaje ${pokemon.id} es ${pokemon.name}`)
        
        return obtenerPokemon(6)
    })
    .then((pokemon) =>{
        console.log(`El personaje ${pokemon.id} es ${pokemon.name}`)
        
        return obtenerPokemon(7)
    })
    .then((pokemon) =>{
        console.log(`El personaje ${pokemon.id} es ${pokemon.name}`)
    })
    .catch(onError);