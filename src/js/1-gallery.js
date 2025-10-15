import { images } from "./arr-gallery-markup";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
function createMarkup() {
   return images.map(({preview, original, description}) => {
      return `<li class="gallery-item">
	<a class="gallery-link" href=${original}>
		<img 
		  class="gallery-image" 
		  src=${preview} 
		  alt=${description} 
		/>
	</a>
</li>`
   }).join("");
};
const galleryList = document.querySelector(".gallery-list");
galleryList.insertAdjacentHTML("afterbegin", createMarkup());
new SimpleLightbox('.gallery-list a', { 
   captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
 });