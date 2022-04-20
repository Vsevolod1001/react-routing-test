import axios from 'axios';

const KEY_API = 'f8fb1aa4ecd91eaa841106c5d2d7056f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrend = async () => {
  const responce = await axios.get(`trending/all/week?api_key=${KEY_API}`);
  return responce.data.results;
};

export const fetchDetail = async id => {
  const responce = await axios.get(`movie/${id}?api_key=${KEY_API}`);
  return responce.data;
};

export const fetchSearch = async searchMovies => {
  const responce = await axios.get(
    `search/movie?api_key=${KEY_API}&query=${searchMovies}`
  );
  return responce.data.results;
};
