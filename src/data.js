// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const showData = (data) => {
  const pokemonArray = data['pokemon'];
  return pokemonArray;
};

export const sortData = (data, sortBy, sortOrder) => {
  console.log(`${sortBy}  ${sortOrder}`);
  return data;
};

export const filterData = (data, condition) => {
  const pokemonArray = data['pokemon'];
  const result = pokemonArray.filter(pokemon => pokemon.type.includes(condition));
  console.log(result);
  return result;
};