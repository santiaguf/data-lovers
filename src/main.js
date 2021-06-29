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
  card.classList.add('card');
  container.appendChild(card);

  const imgContainer = document.createElement('div');
  imgContainer.id = `img-container-${element.num}`;
  imgContainer.classList.add('img-container');
  card.appendChild(imgContainer);

  const img = document.createElement('img');
  img.setAttribute('id', `img-${element.num}`);
  img.setAttribute('src', `${element.img}`);
  img.setAttribute('class', 'img');
  imgContainer.appendChild(img);

  const infoContainer = document.createElement('div');
  infoContainer.id = `info-container-${element.num}`;
  infoContainer.classList.add('info-container');
  card.appendChild(infoContainer);

  //console.log(element);
};

const removeItems = () => {
  const container = document.createElement('div');
  container.textContent = '';
}

const printData = (data) => {

  const pokemonArray = data['pokemon']
  removeItems();
  pokemonArray.forEach(element => createCard(element));
  //console.log(pokemonArray);
};

const showPokemons = (data) => {
  const allPokemons = showData(data);
  printData(allPokemons);
};

createLayout();
showPokemons(data);