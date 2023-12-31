// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(SimpleLightbox);

const list = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');

list.insertAdjacentHTML('beforeend', markup);
 
   const gallery = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay: 250, });
