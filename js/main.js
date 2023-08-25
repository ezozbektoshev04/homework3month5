const navCatalog = document.querySelector(".nav-catalog");
const navCatalog1 = document.querySelector(".nav-catalog1");
navCatalog1.addEventListener("click", extraCatalog);
function extraCatalog() {
  navCatalog.classList.toggle("navcat");
}
