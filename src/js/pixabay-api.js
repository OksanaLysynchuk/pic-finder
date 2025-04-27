import axios from 'axios';

const API_KEY = '42752010-70402d91d951665a6458bc92c';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = async query => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
};
