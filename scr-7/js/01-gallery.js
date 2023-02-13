import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageList = document.querySelector('.gallery');

let imageGallery = creatImagesMarkup();

imageList.insertAdjacentHTML("afterbegin", imageGallery);

imageList.addEventListener("click", openModal);

function creatImagesMarkup() {
  return galleryItems
    .map(
      element => 
          `<div class="gallery__item">
              <a class="gallery__link" href="${element.original}">
                <img
                  class="gallery__image"
                  src="${element.preview}"
                  data-source="${element.original}"
                  alt="${element.description}"
                />
              </a>
            </div>`
         )
    .join("");
}

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return
  }
  const largeImage = event.target.dataset.source;
    
  const instance = basicLightbox.create(`<img src="${largeImage}">`)

  instance.show();
}  

