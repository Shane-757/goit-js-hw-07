import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageList = document.querySelector('.gallery');

let imageGallery = "";

const images = galleryItems.map((element) => 
 imageGallery += 
  
 

  `<a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      
      alt="${element.description}"
    />
  </a>
`).join("");


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
    
  var lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250, captionPosition: "bottom",});
    
  lightbox.on()
}  


