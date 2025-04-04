let toggle = document.getElementById("toggle");
let slider = document.getElementById("slider");
let card1Price = document.getElementById("card1-price");
let card2Price = document.getElementById("card2-price");
let card3Price = document.getElementById("card3-price");

let isChecked = 0;

[slider, toggle].forEach((el) => {
  el.addEventListener("click", () => {
    isChecked = !isChecked;
    slider.classList.toggle("translate-x-5");
    if (isChecked == 1) {
      card1Price.innerText = "$19.99";
      card2Price.innerText = "$24.99";
      card3Price.innerText = "$39.99";
    } else {
      card1Price.innerText = "$199.99";
      card2Price.innerText = "$249.99";
      card3Price.innerText = "$399.99";
    }
  });
});
