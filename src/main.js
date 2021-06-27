import { example, showData } from './data.js';
import data from './data/pokemon/pokemon.js';

console.log(example);

const createLayout = () => {
  const root = document.getElementById('root');
  const container = document.createElement('div');
  container.id = 'container';
  root.appendChild(container);
}

const createCard = (element) => {
  const container = document.getElementById('container');
  const card = document.createElement('div');
  card.id = element.num;
  container.appendChild(card);
  //console.log(element);
};

const printData = (data) => {
  const pokemonArray = data['pokemon']
  pokemonArray.forEach(element => createCard(element));
  //console.log(pokemonArray);
};

const showPokemons = (data) => {
  const allPokemons = showData(data);
  printData(allPokemons);
};

createLayout();
showPokemons(data);