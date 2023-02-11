import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageList = document.querySelector('.gallery');

let imageGallery = "";

const images = galleryItems.map((element) => 
 imageGallery += 
  `<div class="gallery__item">

  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`).join("");


imageList.insertAdjacentHTML("afterbegin", imageGallery);
const img = document.querySelector('.gallery__image');
console.log(img)
imageList.addEventListener("click", modal);


function modal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return
  }
  const largeImage = event.target.dataset.source;
    
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)
  console.log(event.target.dataset.source)

  instance.show();
}  

