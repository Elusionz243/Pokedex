const pokemonGenerator = require('./pokemonGenerator.js');

document.querySelector('#pokemons').addEventListener('click', () => {
  pokemonGenerator.addPokemonToWebsite();
});