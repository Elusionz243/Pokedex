const axios = require('axios');
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const pokemonList = [];

async function getPokemon() {

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
  return pokemonList;
}

async function getPokemonNames(){
  const pokemonNames = pokemonList.map(({ name }) => name);
  return pokemonNames;
}

function getPokemonInfo() {
  return axios.get(`${BASE_URL}/1`).then(({ data }) => console.log(data));
}

function addPokemonToWebsite(){
  document.getElementById('pokemon-name').innerHTML = pokemonList[0].name;
}

module.exports = { getPokemon, getPokemonNames, getPokemonInfo, addPokemonToWebsite };