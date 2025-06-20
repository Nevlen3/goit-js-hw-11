import { getImagesByQuery } from './pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

const params = new URLSearchParams(window.location.search);
const initialQuery = params.get('search-text');
if (initialQuery) {
  input.value = initialQuery;
  form.dispatchEvent(new Event('submit'));
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) {
    iziToast.error({ message: 'Please enter a search query!' });
    return;
  }
  clearGallery();
  showLoader();
  try {
    const data = await getImagesByQuery(query);
    hideLoader();
    if (!data.hits.length) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    createGallery(data.hits);
  } catch (error) {
    hideLoader();
    iziToast.error({ message: 'Error fetching images. Try again later.' });
  }
});