document.querySelector("#normalGame__muteBtn").addEventListener("click", () => {
  var muteSrc = document.querySelector("#normalGame__muteBtn");
  if(myaudio.paused){
    myaudio.play();
    muteSrc.src="./src/mute.png";
  }
  else{
    myaudio.pause();
    muteSrc.src="./src/sound.png";
  }
});
function loadHardGame() {
  document.querySelector("#difficulty").style.display = "none";
  document.querySelector("#hardGame").style.display = "flex";
  cvs = document.getElementById("hardCanvas");
  ctx = cvs.getContext("2d");

  lifeSpan = document.querySelector(".hardGame__stats__life");
  scoreSpan = document.querySelector(".hardGame__stats__score");
  brickImg.src = "src/red_brick.png";
  title = document.querySelector(".hardGame__title");
  initHardGame();
  hardGameStart();
}
var gamePause = false;
document // pause game..
  .querySelector("#normalGame__pauseBtn")
  .addEventListener("click", () => {
    var settings = document.querySelector("#settings");
    var home = document.querySelector("#settings_home");
    var button = document.querySelector("#normalGame__pauseBtn");
    if (gamePause) {
      button.src="src/pause.png";
      gamePause = false;
      settings.style.display="none";
      home.style.display="none";
      time = setInterval(normalLoop, 8.5);
    } else {
      button.src="src/play.png";
      gamePause = true;
      clearInterval(time);
      settings.style.display="flex";
      home.style.display="flex";
    }
  });
function normalGameStart() {
  createBricks();
  createPig();
  time = setInterval(normalLoop, 8.5);
}
function initNormalGame() {
  pigImg.src = "src/crying-pig_2.png";
  isPigHit = false;
  brick.row = 7;
  brick.column = 5;
  time = 0;
  leftArrow = false;
  rightArrow = false;
  paddle.x = cvs.width / 2 - PADDLE_WIDTH / 2;
  paddle.y = cvs.height - PADDLE_MARGIN_BOTTOM;
  title.innerText = "Normal Mode!";
  resetBall();
}
//게임 졌는지 확인하는 함수
function normalGameOver() {
  if (LIFE <= 0) {
    //졌다면
    clearInterval(time); //루프멈추고
    document.querySelector("#normalGame").style.display = "none";
    document.querySelector(".lose__stats").innerHTML="SCORE:" + SCORE;
    document.querySelector("#lose").style.display = "flex";
  }
}

//게임 이겼는지 확인하는 함수
function normalGameWin() {
  var isGameWin = true;
  if (!isPigHit) {
    for (var r = 0; r < brick.row; r++) {
      for (var c = 0; c < brick.column; c++) {
        isGameWin = isGameWin && !bricks[r][c].status; //하나라도 안깨진 brick 존재하면 isGameWin == false
      }
    }
  }
  if (isGameWin) {
    //이겼다면
    if (isPigHit) {
      // 돼지 찾아서 이긴거면
      bricksToScore(); // 남은 brick 점수추가
      SCORE += 70; //돼지 점수.
    }
    clearInterval(time); //루프멈추고
    title.innerText = "You Win!"; //게임 승리 출력
    title.classList.add("text-rainbow");
    setTimeout(() => {
      // 1초 후에 난이도 화면으로 넘어감.
      document.querySelector("#normalGame").style.display = "none";
      document.querySelector("#difficulty").style.display = "flex";
      var normalmode = document.querySelector(".difficulty__container__house2");
      normalmode.removeEventListener("click", loadNormalGame);
      normalmode.setAttribute("src", "./src/house2Clear.png");
      normalmode.style.opacity = 0.5;
      document.querySelector(
        ".difficulty__container__house3"
      ).style.opacity = 1;
      document
        .querySelector(".difficulty__container__house3")
        .addEventListener("click", loadHardGame);
      //변수들 초기화 필요함..
    }, 1000);
  }
}
function normalLoop() {
  ctx.clearRect(0, 0, cvs.width, cvs.height); //캔버스 초기화
  update();
  draw();
  showGameStats();
  normalGameOver();
  normalGameWin();
}
