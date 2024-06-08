// const url = 'https://exercisedb.p.rapidapi.com/status';

export const excerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '931ac641e2mshd764588e1a7fe7dp1930f4jsnec03a8555240',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
