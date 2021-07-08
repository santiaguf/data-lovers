export const showData = (data) => {
  if (data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0) {
    throw new TypeError('data is not an object');
  }

  const pokemonArray = data['pokemon'];
  return pokemonArray;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0 || sortBy === undefined || typeof sortBy !== 'string' || sortBy === 0 || sortBy === null || sortBy.length === 0 || sortOrder === undefined || typeof sortOrder !== 'string' || sortOrder === 0 || sortOrder === null || sortOrder.length === 0) {
    throw new TypeError('data is not an object');
  }
  const pokemonArray = data['pokemon'];
  let result = pokemonArray.sort(function (a, b) {
    return a.name > b.name ? 1 : -1;
  });
  return sortOrder === 'ASC' ? result : result.reverse();
};

export const filterData = (data, filterBy, condition) => {
  if (data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0 || filterBy === undefined || typeof filterBy !== 'string' || filterBy === 0 || filterBy === null || filterBy.length === 0 || condition === undefined || typeof condition !== 'string' || condition === 0 || condition === null || condition.length === 0) {
    throw new TypeError('data is not an object');
  }

  const pokemonArray = data['pokemon'];
  let result = [];
  if(filterBy === 'type'){
    result = pokemonArray.filter(pokemon => pokemon.type.includes(condition));
  }else {
    result = pokemonArray.filter(pokemon => pokemon.name.includes(condition));
  }

  return result;
};