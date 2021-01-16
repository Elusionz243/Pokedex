const expect = require('chai').expect;
const { getPokemon, getPokemonNames } = require('../src/pokemonGenerator.js');

describe('getPokemon', async () => {
  const pokemon = [
    {
      name: 'bulbasaur',
      id: 1,
      baseExperience: 64,
      height: 7,
      weight: 69,
      frontImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      baseStats: [{ "hp": 45 }, { "attack": 49 }, { "defense": 49 }, { "special-attack": 65 }, { "special-defense": 65 }, { "speed": 45 }]
    },
    {
      name: 'ivysaur',
      id: 2,
      baseExperience: 142,
      height: 10,
      weight: 130,
      frontImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      baseStats: [{ "hp": 60 }, { "attack": 62 }, { "defense": 63 }, { "special-attack": 80 }, { "special-defense": 80 }, { "speed": 60 }]
    },
    {
      name: 'venusaur',
      id: 3,
      baseExperience: 236,
      height: 20,
      weight: 1000,
      frontImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      baseStats: [{ "hp": 80 }, { "attack": 82 }, { "defense": 83 }, { "special-attack": 100 }, { "special-defense": 100 }, { "speed": 80 }]
    }
  ];
  it('Should return an array of pokemon objects', async () => {
    const expected = pokemon;
    const actual = await getPokemon();
    console.log('Test Results:\n', actual);
    expect(actual).to.eql(expected);
  });
});

describe('getPokemonNames', async () => {
  const expected = [ 'bulbasaur', 'ivysaur', 'venusaur' ];
  it('Should return an array of pokemon names', async () => {
    const actual = await getPokemonNames();
    console.log('Test Results:\n', actual);
    expect(actual).to.eql(expected);
  });
});