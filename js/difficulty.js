const difficultyHouse1 = document.querySelector(
  ".difficulty__container__house1"
);
const difficultyHouse2 = document.querySelector(
  ".difficulty__container__house2"
);
const difficultyHouse3 = document.querySelector(
  ".difficulty__container__house3"
);
const difficultyWolf = document.querySelector(".difficulty__wolf");

difficultyHouse1.addEventListener("mouseover", () => {
  difficultyHouse1.style.width = "200px";
  difficultyHouse1.style.left = "30px";
  difficultyWolf.style.left = "50px";
  difficultyWolf.style.top = "470px";
});
difficultyHouse1.addEventListener("mouseout", () => {
  difficultyHouse1.style.width = "140px";
  difficultyHouse1.style.left = "80px";
});

difficultyHouse2.addEventListener("mouseover", () => {
  difficultyHouse2.style.width = "200px";
  difficultyHouse2.style.left = "250px";
  difficultyWolf.style.left = "270px";
});
difficultyHouse2.addEventListener("mouseout", () => {
  difficultyHouse2.style.width = "140px";
  difficultyHouse2.style.left = "300px";
});

difficultyHouse3.addEventListener("mouseover", () => {
  difficultyHouse3.style.width = "200px";
  difficultyHouse3.style.left = "470px";
  difficultyWolf.style.left = "490px";
});
difficultyHouse3.addEventListener("mouseout", () => {
  difficultyHouse3.style.width = "140px";
  difficultyHouse3.style.left = "520px";
});
