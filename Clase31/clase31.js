const API_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/:id';
const options = { crossdomain: true };


function obtenerPokemon(id, callback) {
    const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`;
    
    $
        .get(url, options, callback)
        .fail( () => {
        console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`);
    });

}

obtenerPokemon(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}.`);
    
    obtenerPokemon(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}.`);

        obtenerPokemon(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}.`);

            obtenerPokemon(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}.`);

                obtenerPokemon(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}.`);

                    obtenerPokemon(6, function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}.`);

                        obtenerPokemon(7, function (personaje) {
                            console.log(`Hola, yo soy ${personaje.name}.`);
                        });
                    });
                });
            });
        });
    });
});