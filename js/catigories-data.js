const categories = [
  { id: 1, name: "Молоко, сыр, яйцо", image: "../assets/images/image38.png" },
  { id: 2, name: "Хлеб", image: "../assets/images/image39.png" },
  {
    id: 3,
    name: "Фрукты и овощи",
    image: "../assets/images/image40.png",
  },
  {
    id: 4,
    name: "Замороженные продукты",
    image: "../assets/images/image41.png",
  },
  { id: 5, name: "Напитки", image: "../assets/images/image42.png" },
  {
    id: 6,
    name: "Кондитерские изделия",
    image: "../assets/images/image43.png",
  },
  {
    id: 7,
    name: "Чай, кофе",
    image: "../assets/images/image44.png",
  },
  {
    id: 8,
    name: "Бакалея",
    image: "../assets/images/image45.png",
  },
  { id: 9, name: "Здоровое питание", image: "../assets/images/image46.png" },
  {
    id: 10,
    name: "Зоотовары",
    image: "../assets/images/image47.png",
  },
  {
    id: 11,
    name: "Детское питание",
    image: "../assets/images/image48.png",
  },
  {
    id: 12,
    name: "Мясо, птица, колбаса",
    image: "../assets/images/image49.png",
  },
  {
    id: 10,
    name: "Непродовольственные товары",
    image: "../assets/images/image50.png",
  },
];
let catigoriesCards = document.querySelector(".catigories-mainsec-cards");
let str = "";
categories.map((catigory) => {
  str += `<div class="catigories-mainsec-card">
            <div class="bg-img">
              <img src="${catigory.image}" alt="" class="img38" />
              <div class="linear"></div>
            </div>
            <a href="#" class="a2">${catigory.name}</a>
         </div>`;
});
catigoriesCards.innerHTML = str;
