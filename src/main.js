import { example, showData } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(example);

const createLayout = () => {
  
}

const printData = (data) => {
  const pokemonArray = data['pokemon']
  console.log(pokemonArray);
};

const showPokemons = (data) => {
  const allPokemons = showData(data);
  printData(allPokemons);
};

createLayout();
showPokemons(data);