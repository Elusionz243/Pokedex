const axios = require('axios');
const { builtinModules } = require('module');
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';


async function getPokemon() {
  const pokemonList = [];
  for (let i = 1; i < 4; i++) {
    const pokemon = await axios.get(`${BASE_URL}/${i}`);
    const { data } = pokemon;
    const { name, id, height, weight, stats, sprites, base_experience } = data;
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
      'baseExperience': base_experience,
      'height': height,
      'weight': weight,
      'frontImage': sprites.front_default,
      'baseStats': statNames
    };
    pokemonList.push(pokemonInfo);
  }
  // console.log(pokemonList);
  return pokemonList;
}

async function getPokemonNames(){
  const pokemonList = await getPokemon();
  const pokemonNames = pokemonList.map(({ name }) => name);
  // console.log(pokemonNames);
  return pokemonNames;
}

function getPokemonInfo() {
  return axios.get(`${BASE_URL}/1`).then(({ data }) => console.log(data));
}
function addPokemonToWebsite(){
  document.getElementById('pokemon-name').innerHTML = pokemonList[0].name;
  // document.getElementById('pokemon-name').innerHTML = pokemonList[0].name;
}

getPokemon();
getPokemonNames();
// addPokemonToWebsite();

module.exports = { addPokemonToWebsite, getPokemon, getPokemonNames };