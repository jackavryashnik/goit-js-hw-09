// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: '/goit-js-hw-09/src/img/1.jpg',
    original: '/goit-js-hw-09/src/img/1@x3.jpg',
    description: 'developing strategy process',
  },
  {
    preview: '/goit-js-hw-09/src/img/2.jpg',
    original: '/goit-js-hw-09/src/img/2@x3.jpg',
    description: 'light bulb symbolize idea',
  },
  {
    preview: '/goit-js-hw-09/src/img/3.jpg',
    original: '/goit-js-hw-09/src/img/3@x3.jpg',
    description: 'smartphone with slogan on display',
  },
  {
    preview: '/goit-js-hw-09/src/img/4.jpg',
    original: '/goit-js-hw-09/src/img/4@x3.jpg',
    description: 'meeting room',
  },
  {
    preview: '/goit-js-hw-09/src/img/5.jpg',
    original: '/goit-js-hw-09/src/img/5@x3.jpg',
    description: 'rest zone',
  },
  {
    preview: '/goit-js-hw-09/src/img/6.jpg',
    original: '/goit-js-hw-09/src/img/6@x3.jpg',
    description: 'coworking space with full seats',
  },
  {
    preview: '/goit-js-hw-09/src/img/7.jpg',
    original: '/goit-js-hw-09/src/img/7@x3.jpg',
    description: 'laptop and coffee',
  },
  {
    preview: '/goit-js-hw-09/src/img/8.jpg',
    original: '/goit-js-hw-09/src/img/8@x3.jpg',
    description: 'person working on laptop',
  },
  {
    preview: '/goit-js-hw-09/src/img/9.jpg',
    original: '/goit-js-hw-09/src/img/9@x3.jpg',
    description: 'meeting',
  },
];

const gallery = document.querySelector('.gallery');
const markup = images
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery-item">
        <a class="gallery-link" href=${original}>
          <img class="gallery-image" src=${preview} data-source=${original} alt="${description}" width="360" height="200"/>
        </a>
       </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a');
