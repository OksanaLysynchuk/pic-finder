// hendle form and call functions
//→ Check input not empty (main.js)
//→ If empty, show iziToast

// get the search input, if empty notify - main js
// fetch pics from api - api js
// show/hide loader - render js
// render pics in gallery - render js
// hide loader after the result - render js
// open lightbox when clicked on photo - render js
// close lightbox - render js
// clear gallery when new request sent - render js

// functions:
// getImagesByQuery(query) — in pixabay-api.js
// createGallery(images) — in render-functions.js
// clearGallery() — in render-functions.js
// showLoader() — in render-functions.js
// hideLoader() — in render-functions.js

import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('form');
const input = document.querySelector('input');

const handleSubmit = async event => {
  event.preventDefault();

  const query = input.value.trim();

  if (query === '') {
    iziToast.show({
      title: 'Error',
      message: "Search field can't be empty!",
    });
    return;
  }

  showLoader();

  try {
    const data = await getImagesByQuery(query);
    console.log(data);

    if (data.hits.length === 0) {
      iziToast.show({
        title: 'Error',
        message: 'Sorry, no images found!',
      });
    } else {
      clearGallery();
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.show({
      title: 'Error',
      message: 'Oops, something went wrong. Try again later!',
    });
    console.log(error);
  } finally {
    hideLoader();
  }
};

form.addEventListener('submit', handleSubmit);
