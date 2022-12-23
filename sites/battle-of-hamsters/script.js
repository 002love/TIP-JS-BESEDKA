class Hamster {
  constructor() {
    this.x = Math.floor(Math.random() * 895 + 10) + "px";
    this.y = "510px";
    this.food = [];
    this.background = `url('${
      avas[Math.round(Math.random() * avas.length - 1)]
    }')`;
    this.backgroundSize = "contain";
  }
}

let zoo = []; //экземпляры
let arr = []; //элементы DOM

let container = document.querySelector(".container");
let button = document.querySelector(".button"); // доб. хомячка
let start = document.querySelector(".start"); // старт гонки
let stop = document.querySelector(".stop"); // стоп гонки
let img = document.querySelector(".img");
let prize = document.querySelector(".prize");

console.log(container);
const newHumster = () => {
  zoo.push(new Hamster());
  container.insertAdjacentHTML("afterbegin", '<div class="hamster"></div>');
  arr = document.querySelectorAll(".hamster");
  arr.forEach((el, index) => {
    el.style.top = zoo[index].y;
    el.style.left = zoo[index].x;
    el.style.background = zoo[index].background;
    el.style.backgroundSize = "contain";
    el.style.animation = "glow-inset 1s infinite";
  });
};

button.addEventListener("click", newHumster);

const move = () => {
  if (zoo.length == 0 && arr.length == 0) {
    return;
  }
  start.removeEventListener("click", move);
  button.removeEventListener("click", newHumster);
  stop.addEventListener("click", () => {
    clearInterval(interval);
    start.addEventListener("click", move);
  });
  let interval = setInterval(() => {
    arr.forEach((el, index) => {
      let currentY = +window.getComputedStyle(el).top.slice(0, -2);
      currentY -= Math.floor(Math.random() * 20 + 10);
      el.style.top = currentY + "px";
      if (currentY <= 0) {
        el.style.top = 0 + "px";
        clearInterval(interval);
        zoo[index].food.push(Math.round(Math.random() * 10));
        console.log(zoo[index].food);
        prize.style.display = "block !important";
        img.style.background = `url('${
          prizes[Math.floor(Math.random() * prizes.length)]
        }')`;
        zoo.forEach((el, i) => {
          if (el.food.length == 0) {
            arr[i].classList.add("GG");
            arr[i].style.animation = "end 5s linear";
            setTimeout(() => {
              arr[i].remove();
              zoo[i].remove();
              start.addEventListener("click", move);
            }, 4900);
          }
        });
        const ind = index;
        console.log(zoo);
        zoo
          .map((elem, inde) => (ind !== inde ? 0 : el))
          .filter((el) => el !== 0);
        console.log(zoo);
        start.classList.toggle;
      }
    });
  }, 250);
};

start.addEventListener("click", move);
