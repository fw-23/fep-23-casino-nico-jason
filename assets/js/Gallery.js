
console.log("Gallery script works");

function openLightbox(elem) {
    const bigImg = elem.dataset.fullsize;
    console.log(bigImg);
    document.querySelector('#lightbox img').src = bigImg;
}
function ActivateImg() {
  document.querySelectorAll('#ImageGallery img').forEach((element) => {
    element.addEventListener('click', () => openLightbox(element));
}); } 