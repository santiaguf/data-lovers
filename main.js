import { showData, filterData, sortData, computeStats } from './data.js';
import data from './data/pokemon/pokemon.js';

const createLayout = () => {

  const root = document.getElementById('root');

  const header = document.createElement('header');
  header.id = 'header';
  root.appendChild(header);

  const logoContainer = document.createElement('div');
  logoContainer.id = 'logo-conainer';
  header.appendChild(logoContainer);

  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = 'img/logo.png';
  logo.classList.add('img');
  logoContainer.appendChild(logo);

  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-container';
  header.appendChild(menuContainer);

  const showAllButton = document.createElement('button');
  showAllButton.id = 'show-all-btn';
  showAllButton.textContent = 'Mostrar todos';
  menuContainer.appendChild(showAllButton);

  const values = ["grass", "poison", "fire", "flying", "water", "bug",  "normal",  "electric",  "ground",  "fighting", "psychic",  "rock",  "ice",  "ghost",  "dragon",  "fairy",  "dark", "steel"];

  const select = document.createElement("select");
  select.name = "pokemon-type";
  select.id = "pokemon-type"

  for (const val of values)
  {
      const option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option);
  }

  const label = document.createElement("label");
  label.innerHTML = "filtrar por tipo: ";
  label.htmlFor = "pokemon-type";

  document.getElementById("menu-container").appendChild(label).appendChild(select);

  const filterButton = document.createElement('button');
  filterButton.id = 'filter-btn';
  filterButton.textContent = 'Filtrar';
  menuContainer.appendChild(filterButton);

  const searchbox = document.createElement('input');
  searchbox.id = 'search-box';
  searchbox.placeholder = 'buscar pokemon';
  menuContainer.appendChild(searchbox);

  const orderText = document.createElement('span');
  orderText.id = 'order-text';
  orderText.textContent = 'Ordenar por nombre';
  menuContainer.appendChild(orderText);

  const orderAscButton = document.createElement('button');
  orderAscButton.id = 'order-asc-btn';
  orderAscButton.textContent = 'A-Z';
  menuContainer.appendChild(orderAscButton);

  const orderDescButton = document.createElement('button');
  orderDescButton.id = 'order-desc-btn';
  orderDescButton.textContent = 'Z-A';
  menuContainer.appendChild(orderDescButton);

  const statsButton = document.createElement('button');
  statsButton.id = 'stats-btn';
  statsButton.textContent = 'Estadísticas';
  menuContainer.appendChild(statsButton);

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

};

const removeItems = () => {
  const container = document.getElementById('container');
  container.textContent = '';
}

const printData = (data) => {
  removeItems();
  data.forEach(element => createCard(element));
};

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
  console.log(stats);
};

createLayout();
showPokemons(data);

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