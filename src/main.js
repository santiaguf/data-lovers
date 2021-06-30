import { showData, sortData, filterData } from './data.js';
import data from './data/pokemon/pokemon.js';

const createLayout = () => {

  const root = document.getElementById('root');
  const header = document.createElement('header');
  header.id = 'header';
  root.appendChild(header);

  const container = document.createElement('div');
  container.id = 'container';
  root.appendChild(container);

  const footer = document.createElement('footer');
  footer.id = 'footer';
  root.appendChild(footer);

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

  const numberContainer = document.createElement('div');
  numberContainer.id = `number-container-${element.num}`;
  numberContainer.classList.add('number-container');
  infoContainer.appendChild(numberContainer);

  const num = document.createElement('p');
  num.id = `name-${element.num}`;
  num.classList.add('number-container');
  num.textContent = element.num;
  numberContainer.appendChild(num);

  const nameContainer = document.createElement('div');
  nameContainer.id = `name-container-${element.num}`;
  nameContainer.classList.add('name-container');
  infoContainer.appendChild(nameContainer);

  const name = document.createElement('p');
  name.id = `name-${element.num}`;
  name.classList.add('name');
  name.textContent = element.name;
  nameContainer.appendChild(name);

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

const sortPokemons = (data, sortBy, order) => {
  const allPokemons = sortData(data, sortBy, order);
  printData(allPokemons);
};

const filterPokemons = (data, condition) => {
    const allPokemons = filterData(data, condition)
    printData(allPokemons);
};

createLayout();
showPokemons(data);

