const navCatalog = document.querySelector(".nav-catalog");
const navCatalog1 = document.querySelector(".nav-catalog1");
navCatalog1.addEventListener("click", extraCatalog);
function extraCatalog() {
  navCatalog.classList.toggle("navcat");
}

const acc = document.querySelector(".acc");
const modal = document.querySelector(".modal");
const d3 = document.querySelector(".d3");
const modalClose = document.querySelector(".modal-close");
const modalBtnClose = document.querySelector(".modal-btn1");
acc.addEventListener("click", function () {
  modal.classList.add("modal-bl");
});
modalClose.addEventListener("click", function () {
  modal.classList.remove("modal-bl");
});
modalBtnClose.addEventListener("click", function () {
  modal.classList.remove("modal-bl");
});
window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.classList.remove("modal-bl");
  }
});
