const axios = require('axios');
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

async function getPokemon() {
  const pokemonList = [];
  for (let i = 1; i < 20; i++) {
    const pokemon = await axios.get(`${BASE_URL}/${i}`);
    const { data } = pokemon;
    const { name, id, height, weight, stats, sprites } = data;
    const statNames = [];
    // console.log(data);
    stats.forEach(pokeStat => {
      let pokemonStats = {};
      pokemonStats[pokeStat.stat.name] = pokeStat.base_stat;
      statNames.push(pokemonStats);
    });

    let pokemonInfo = {
      'name': name,
      'id': id,
      'height': height,
      'weight': weight,
      'frontImage': sprites.front_default,
      'baseStats': statNames
    };
    pokemonList.push(pokemonInfo);
  }
  console.log(pokemonList);
  return pokemonList;
}

function getPokemonInfo() {
  return axios.get(`${BASE_URL}/1`).then(({ data }) => console.log(data.sprites.front_default));
}
async function addPokemonToWebsite(){
  const pokemons = getPokemon();
  pokemons.forEach(pokemon => {
    document.getElementById('pokemon-name').innerHTML = pokemon.name;
  });
}
getPokemon();