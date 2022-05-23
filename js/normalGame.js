document
  .querySelector(".difficulty__container__normal")
  .addEventListener("click", () => {
    document.querySelector("#difficulty").style.display = "none";
    document.querySelector("#normalGame").style.display = "flex";
    cvs = document.getElementById("normalCanvas");
    ctx = cvs.getContext("2d");

    lifeSpan = document.querySelector(".normalGame__stats__life");
    scoreSpan = document.querySelector(".normalGame__stats__score");

    title = document.querySelector(".normalGame__title");
    gameStart();
  });
