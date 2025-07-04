import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery ul');
const loader = document.querySelector('.loader');

export const clearGallery = () => {
  galleryContainer.innerHTML = '';
};

export const createGallery = images => {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags }) => {
      return `<li class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link"
              ><img src="${webformatURL}" alt="${tags}" class="gallery-image"
            />
          </a>
          </li>`;
    })
    .join('');

  galleryContainer.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};

export const showLoader = () => {
  loader.classList.remove('hidden');
};

export const hideLoader = () => {
  loader.classList.add('hidden');
};
