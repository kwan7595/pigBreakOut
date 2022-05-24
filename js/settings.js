//bgm

//paddle
var PADDLE_COLOR = "";
document
  .querySelector(".settings__label__paddle__paddle1")
  .addEventListener("click", () => {
    document.querySelector(".settings__label__paddle__paddle1").style.border =
      "3px solid black";
    document.querySelector(".settings__label__paddle__paddle2").style.border =
      "none";
    PADDLE_COLOR = "wheat";
  });
document
  .querySelector(".settings__label__paddle__paddle2")
  .addEventListener("click", () => {
    document.querySelector(".settings__label__paddle__paddle2").style.border =
      "3px solid black";
    document.querySelector(".settings__label__paddle__paddle1").style.border =
      "none";
    PADDLE_COLOR = "blue";
  });

//bckImg
document
  .querySelector(".settings__label__bckImg__day")
  .addEventListener("click", () => {
    document.querySelector("#pageWrapper").style.backgroundImage =
      'url("src/background_day.png")';
  });

document
  .querySelector(".settings__label__bckImg__night")
  .addEventListener("click", () => {
    document.querySelector("#pageWrapper").style.backgroundImage =
      'url("src/background_night.png")';
  });
