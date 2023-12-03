const images = [
  {
    preview: './img/1.jpg',
    original: './img/1@x3.jpg',
    description: 'developing strategy process',
  },
  {
    preview: './img/2.jpg',
    original: './img/2@x3.jpg',
    description: 'light bulb symbolize idea',
  },
  {
    preview: './img/3.jpg',
    original: './img/3@x3.jpg',
    description: 'smartphone with slogan on display',
  },
  {
    preview: './img/4.jpg',
    original: './img/4@x3.jpg',
    description: 'meeting room',
  },
  {
    preview: './img/5.jpg',
    original: './img/5@x3.jpg',
    description: 'rest zone',
  },
  {
    preview: './img/6.jpg',
    original: './img/6@x3.jpg',
    description: 'coworking space with full seats',
  },
  {
    preview: './img/7.jpg',
    original: './img/7@x3.jpg',
    description: 'laptop and coffee',
  },
  {
    preview: './img/8.jpg',
    original: './img/8@x3.jpg',
    description: 'person working on laptop',
  },
  {
    preview: './img/9.jpg',
    original: './img/9@x3.jpg',
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
