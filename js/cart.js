let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

const korzinkaCards = document.querySelector(".korzinka-cards");
let str = "";
cartProducts.map((product) => {
  str += `        <div class="korzinka-card">
  <img src="${product.images[0]}" alt="" style="width:80px;height:60px;"/>
  <div class="d10">
    <div class="d11">
      <p class="p10">${product.description}</p>
      <div class="d13">
        <p class="p11">${product.price},00 ₽</p>
        <p class="p12">за шт.</p>
      </div>
    </div>
  </div>
  <div class="card-btn">
    <button class="btn5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
          fill="white"
        />
      </svg>
    </button>
    <p class="p13">1</p>
    <button class="btn6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
  <p class="p14">${product.price},00 ₽</p>
</div>`;
});

korzinkaCards.innerHTML = str;

let button5 = document.querySelector(".btn5");
let num = document.querySelector(".p13");
let button6 = document.querySelector(".btn6");
let x = 1;
button6.addEventListener("click", function (e) {
  x++;
  num.innerHTML = x;
});
button5.addEventListener("click", function (e) {
  x--;
  num.innerHTML = x;
});
