import { showData, filterData, sortData, computeStats } from './data.js';
import data from './data/pokemon/pokemon.min.js';

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
  img.setAttribute('alt', `${element.name}`);
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

};

const removeItems = () => {
  const container = document.getElementById('container');
  container.textContent = '';
}

const printData = (data) => {
  removeItems();
  data.forEach(element => createCard(element));
};

const printStats = (stats, data) => {
  removeItems();

  let totalPokemons = data.pokemon.length;
  let newarray = [];
  for (const [key, value] of Object.entries(stats)) {
    let tempArray = {};
    let percent = Math.trunc((value*100/totalPokemons));

    const typePhotos = {
      'bug' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/120px-Pok%C3%A9mon_Bug_Type_Icon.svg.png',
    'water':'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/120px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
    'fairy':'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/120px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png',
    'electric':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/120px-Pok%C3%A9mon_Electric_Type_Icon.svg.png',
    'dragon':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/120px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png',
    'dark':'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/120px-Pok%C3%A9mon_Dark_Type_Icon.svg.png',
    'flying':'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/120px-Pok%C3%A9mon_Flying_Type_Icon.svg.png',
    'fire':'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/120px-Pok%C3%A9mon_Fire_Type_Icon.svg.png',
    'fighting':'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/120px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png',
    'ground':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/120px-Pok%C3%A9mon_Ground_Type_Icon.svg.png',
    'grass':'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/120px-Pok%C3%A9mon_Grass_Type_Icon.svg.png',
    'ghost':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/120px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png',
    'poison':'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/120px-Pok%C3%A9mon_Poison_Type_Icon.svg.png',
    'normal':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/120px-Pok%C3%A9mon_Normal_Type_Icon.svg.png',
    'ice':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/120px-Pok%C3%A9mon_Ice_Type_Icon.svg.png',
    'steel':'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/120px-Pok%C3%A9mon_Steel_Type_Icon.svg.png',
    'rock':'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/120px-Pok%C3%A9mon_Rock_Type_Icon.svg.png',
    'psychic':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/120px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png'
    };

    tempArray['img']= `${typePhotos[key]}`;
    tempArray['name'] = `${key} about ${percent} % of total`;
    tempArray['num'] = `${value}`;
    newarray.push(tempArray);
  }
  printData(newarray);
}

const showPokemons = (data) => {
  const allPokemons = showData(data);
  printData(allPokemons);
};

const sortPokemons = (data, sortBy, order) => {
  const allPokemons = sortData(data, sortBy, order);
  printData(allPokemons);
};

const filterPokemons = (data, filterBy, condition) => {
    const allPokemons = filterData(data, filterBy, condition);
    printData(allPokemons);
};

const computePokemonStats = (data) => {
  const stats = computeStats(data);
  printStats(stats, data);
};

const showAllBtn = document.getElementById('show-all-btn');
showAllBtn.addEventListener('click', () => {
  showPokemons(data);
});

const filterBtn = document.getElementById('filter-btn');
filterBtn.addEventListener('click', () => {
  const pokemonTypeList = document.getElementById('pokemon-type');
  const typeSelected = pokemonTypeList.options[pokemonTypeList.selectedIndex].value;
  filterPokemons(data, 'type', typeSelected);
});

const searchBtn = document.getElementById('search-box');
searchBtn.addEventListener('keypress', () => {
  let searchTerm = document.getElementById('search-box').value;

  if(searchTerm.length > 1){
    filterPokemons(data, 'name', searchTerm);
  }
});

const orderAscBtn = document.getElementById('order-asc-btn');
orderAscBtn.addEventListener('click', () => {
  sortPokemons(data, 'name', 'ASC');
});

const orderdescBtn = document.getElementById('order-desc-btn');
orderdescBtn.addEventListener('click', () => {
  sortPokemons(data, 'name', 'DESC');
});

const statsBtn = document.getElementById('stats-btn');
statsBtn.addEventListener('click', () => {
  computePokemonStats(data);
});