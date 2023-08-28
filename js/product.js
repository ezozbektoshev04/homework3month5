const smallImages = document.getElementsByClassName("d7");
const images = document.getElementsByClassName("carousel-item");
const visImages = document.getElementsByClassName("carousel-vis");

function hideAllSlides() {
  for (const i of images) {
    i.classList.remove("carousel-vis");
    i.classList.add("carousel-hid");
  }
}
for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].addEventListener("click", function () {
    hideAllSlides();
    images[i].classList.add("carousel-vis");
  });
}
