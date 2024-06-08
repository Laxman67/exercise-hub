// const url = 'https://exercisedb.p.rapidapi.com/status';

export const excerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '0993e0b9bdmsh3fd02f39fc48079p1a5086jsnde3f90a39523',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
