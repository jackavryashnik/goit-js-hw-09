// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: './img/1.jpg',
    original: './img/1@x3.jpg',
    description: 'developing strategy process',
  },
  {
    preview: './src/img/2.jpg',
    original: './src/img/2@x3.jpg',
    description: 'light bulb symbolize idea',
  },
  {
    preview: './src/img/3.jpg',
    original: './src/img/3@x3.jpg',
    description: 'smartphone with slogan on display',
  },
  {
    preview: './src/img/4.jpg',
    original: './src/img/4@x3.jpg',
    description: 'meeting room',
  },
  {
    preview: './src/img/5.jpg',
    original: './src/img/5@x3.jpg',
    description: 'rest zone',
  },
  {
    preview: './src/img/6.jpg',
    original: './src/img/6@x3.jpg',
    description: 'coworking space with full seats',
  },
  {
    preview: './src/img/7.jpg',
    original: './src/img/7@x3.jpg',
    description: 'laptop and coffee',
  },
  {
    preview: './src/img/8.jpg',
    original: './src/img/8@x3.jpg',
    description: 'person working on laptop',
  },
  {
    preview: './src/img/9.jpg',
    original: './src/img/9@x3.jpg',
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
