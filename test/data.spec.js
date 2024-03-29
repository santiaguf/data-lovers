import { showData, sortData, filterData, computeStats } from '../src/data.js';

const pokemonMock = {
  pokemon: [
  {
    "name": "Zubat",
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
  },
  {
    "name": "Pikachu",
    "type": [
      "Electric"
    ],
    "size":{
      "height": "0.51 m",
    },
    "spawn_chance": 0.58,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
  },
  ]
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
    const result = filterData(pokemonMock, 'type', 'Water');
    expect(result[0].name).toEqual('Squirtle');
  });

  it('return Ivysaur from pokemonMock when name contains "Ivy" ', () => {
    const result = filterData(pokemonMock, 'name', 'Ivy');
    expect(result[0].name).toEqual('Ivysaur');
  });

  it('should throw TypeError when invoked with wrong arguments', () => {
    expect(() => filterData()).toThrow(TypeError);
    expect(() => filterData(0)).toThrow(TypeError);
    expect(() => filterData(null)).toThrow(TypeError);
    expect(() => filterData([])).toThrow(TypeError);
    expect(() => filterData(pokemonMock)).toThrow(TypeError);
    expect(() => filterData(pokemonMock, 0)).toThrow(TypeError);
    expect(() => filterData(pokemonMock, null)).toThrow(TypeError);
    expect(() => filterData(pokemonMock, undefined)).toThrow(TypeError);
    expect(() => filterData(pokemonMock, String, )).toThrow(TypeError);
    expect(() => filterData(pokemonMock, String, 0)).toThrow(TypeError);
    expect(() => filterData(pokemonMock, String, null)).toThrow(TypeError);
    expect(() => filterData(pokemonMock, String, undefined)).toThrow(TypeError);
  });

});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('return Squirtle as first element from pokemonMock when is sorted by name descending ', () => {
    const result = sortData(pokemonMock, 'name', 'DESC');
    expect(result[0].name).toEqual('Zubat');
  });

  it('return Bulbasaur as first element from pokemonMock when is sorted by name ascending ', () => {
    const result = sortData(pokemonMock, 'name', 'ASC');
    expect(result[0].name).toEqual('Bulbasaur');
  });

  it('should throw TypeError when invoked with wrong arguments', () => {
    expect(() => sortData()).toThrow(TypeError);
    expect(() => sortData(0)).toThrow(TypeError);
    expect(() => sortData(null)).toThrow(TypeError);
    expect(() => sortData([])).toThrow(TypeError);
    expect(() => sortData(pokemonMock)).toThrow(TypeError);
    expect(() => sortData(pokemonMock, 0)).toThrow(TypeError);
    expect(() => sortData(pokemonMock, null)).toThrow(TypeError);
    expect(() => sortData(pokemonMock, undefined)).toThrow(TypeError);
    expect(() => sortData(pokemonMock, String, )).toThrow(TypeError);
    expect(() => sortData(pokemonMock, String, 0)).toThrow(TypeError);
    expect(() => sortData(pokemonMock, String, null)).toThrow(TypeError);
    expect(() => sortData(pokemonMock, String, undefined)).toThrow(TypeError);
  });

});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('return 1 from pokemonMock when type is "Water" ', () => {
    const result = computeStats(pokemonMock);
    expect(result['Water']).toEqual(1);
  });

  it('should throw TypeError when invoked with wrong argument', () => {
    expect(() => computeStats()).toThrow(TypeError);
    expect(() => computeStats(0)).toThrow(TypeError);
    expect(() => computeStats(null)).toThrow(TypeError);
    expect(() => computeStats([])).toThrow(TypeError);
  });

});