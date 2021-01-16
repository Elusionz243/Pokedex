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

async function addPokemonToWebsite(){
  await getPokemon();
  document.getElementById('pokemon-image').src = pokemonList[0].frontImage;
  document.getElementById('pokemon-name').innerHTML = 'Name: ' + pokemonList[0].name;
  document.getElementById('pokemon-id').innerHTML = 'ID: ' + pokemonList[0].id;
  document.getElementById('pokemon-height').innerHTML = 'Height: ' + pokemonList[0].height;
  document.getElementById('pokemon-weight').innerHTML = 'Weight: ' + pokemonList[0].weight;
  document.getElementById('pokemon-basestats').innerHTML = 'baseStats: ' + pokemonList[0].baseStats[0];
}

module.exports = { getPokemon, getPokemonNames, getPokemonInfo, addPokemonToWebsite };