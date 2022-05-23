document
  .querySelector(".difficulty__container__house3")
  .addEventListener("click", () => {
    document.querySelector("#difficulty").style.display = "none";
    document.querySelector("#hardGame").style.display = "flex";
    cvs = document.getElementById("hardCanvas");
    ctx = cvs.getContext("2d");

    lifeSpan = document.querySelector(".hardGame__stats__life");
    scoreSpan = document.querySelector(".hardGame__stats__score");

    title = document.querySelector(".hardGame__title");
    gameStart();
  });
