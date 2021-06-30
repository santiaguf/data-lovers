// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const showData = (data) => {
  return data;
};

export const sortData = (data, sortBy, sortOrder) => {
  console.log(`${sortBy}  ${sortOrder}`);
  return data;
};

export const filterData = (data, condition) => {
  console.log(`${condition}`);
  return data;
};