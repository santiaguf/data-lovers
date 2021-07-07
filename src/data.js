export const showData = (data) => {
  if (data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0) {
    throw new TypeError('data is not an object');
  }

  const pokemonArray = data['pokemon'];
  return pokemonArray;
};

export const sortData = (data, sortBy, sortOrder) => {
  console.log(`${sortBy}  ${sortOrder}`);
  return data;
};

export const filterData = (data, condition) => {
  if (data === undefined || typeof data !== 'object' || data === 0 || data === null || data.length === 0 || condition === undefined || typeof condition !== 'string' || condition === 0 || condition === null || condition.length === 0) {
    throw new TypeError('data is not an object');
  }

  const pokemonArray = data['pokemon'];
  const result = pokemonArray.filter(pokemon => pokemon.type.includes(condition));
  return result;
};