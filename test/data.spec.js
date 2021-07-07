import { showData, sortData, filterData } from '../src/data.js';

const pokemonMock = {
  pokemon: [{
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "size":{
      "height": "0.71 m",
    },
    "spawn_chance": 0.69,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  },
  {
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "size":{
      "height": "0.99 m",
    },
    "spawn_chance": 0.042,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  },
  {
    "name": "Squirtle",
    "type": [
      "Water"
    ],
    "size":{
      "height": "0.51 m",
    },
    "spawn_chance": 0.58,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
  }]
};

describe('showData', () => {
  it('is a function', () => {
    expect(typeof showData).toBe('function');
  });

  it('returns an object', () => {
    expect(showData(pokemonMock)).toBe(pokemonMock.pokemon);
  });

  it('should throw TypeError when invoked with wrong argument', () => {
    expect(() => showData()).toThrow(TypeError);
    expect(() => showData(0)).toThrow(TypeError);
    expect(() => showData(null)).toThrow(TypeError);
    expect(() => showData([])).toThrow(TypeError);
  });

});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('return Squirtle from pokemonMock when type is "Water" ', () => {
    const result = filterData(pokemonMock, 'Water');
    expect(result[0].name).toEqual('Squirtle');
  });


  it('should throw TypeError when invoked with wrong argument', () => {
    expect(() => filterData()).toThrow(TypeError);
    expect(() => filterData(0)).toThrow(TypeError);
    expect(() => filterData(null)).toThrow(TypeError);
    expect(() => filterData([])).toThrow(TypeError);
    expect(() => filterData(pokemonMock)).toThrow(TypeError);
    expect(() => filterData(pokemonMock, 0)).toThrow(TypeError);
    expect(() => filterData(pokemonMock, null)).toThrow(TypeError);
    expect(() => filterData(pokemonMock, undefined)).toThrow(TypeError);
  });

});


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns an object', () => {
    expect(sortData(Object, String, String)).toBe(Object);
  });
});