//MAIN
const playBtn = document.querySelector(".main__btnBox__playBtn");
const storyBtn = document.querySelector(".main__btnBox__storyBtn");
const setBtn = document.querySelector(".main__btnBox__setBtn");

playBtn.addEventListener("click", () => {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#difficulty").style.display = "flex";
});

storyBtn.addEventListener("click", () => {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#story").style.display = "flex";
});

setBtn.addEventListener("click", () => {
  document.querySelector("#settings").style.display = "flex";
});

//SETTINGS
document.querySelector(".settings__closeBtn").addEventListener("click", () => {
  document.querySelector("#settings").style.display = "none";
});

document.querySelector(".story__play").addEventListener("click", () => {
  document.querySelector("#story").style.display = "none";
  document.querySelector("#difficulty").style.display = "flex";
});

//STORY
document.querySelector(".story__main").addEventListener("click", () => {
  document.querySelector("#story").style.display = "none";
  document.querySelector("#main").style.display = "flex";
});

//하다보니 함수만들어서 해도 좋을듯..

//EASY
//NORMAL
//HARD
//WIN
//LOSE
