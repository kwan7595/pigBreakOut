var gamePause=false;
document // pause game..
  .querySelector("#hardGame__pauseBtn")
  .addEventListener("click",()=>{
    if(gamePause){
      gamePause=false;
      time = setInterval(hardLoop,10);
    }
    else{
      gamePause=true;
      clearInterval(time);
    }
  });
function hardGameStart(){
  createBricks();
  time = setInterval(hardLoop,10);
}
function initHardGame(){
  brick.row=1;
  brick.column=3;
  time=0;
  leftArrow=false;
  rightArrow=false;
  paddle.x =cvs.width/2 - PADDLE_WIDTH/2;
  paddle.y =cvs.height - PADDLE_MARGIN_BOTTOM;
  title.innerText="Hard Mode!";
  resetBall();
}
//게임 졌는지 확인하는 함수
function hardGameOver() {
  if (LIFE <= 0) {
    //졌다면
    clearInterval(time); //루프멈추고
    document.querySelector("#hardGame").style.display="none";
    document.querySelector("#lose").append("score:"+SCORE);
    document.querySelector("#lose").style.display="flex";
  }
}

//게임 이겼는지 확인하는 함수
function hardGameWin() {
  var isGameWin = true;
  for (var r = 0; r < brick.row; r++) {
    for (var c = 0; c < brick.column; c++) {
      isGameWin = isGameWin && !bricks[r][c].status; //하나라도 안깨진 brick 존재하면 isGameWin == false
    }
  }
  if (isGameWin) {
    //이겼다면
    clearInterval(time); //루프멈추고
    title.innerText = "You Win!"; //게임 승리 출력
    setTimeout(()=>{ // 1초 후에 난이도 화면으로 넘어감.
      document.querySelector("#hardGame").style.display="none";
      document.querySelector("#win").style.display="flex";
      document.querySelector("#win").append("SCORE:"+SCORE).append("LIFE:"+LIFE);
    },1000);  
  }
}
function hardLoop() {
  ctx.clearRect(0, 0, cvs.width, cvs.height); //캔버스 초기화
  update();
  draw();
  showGameStats();
  hardGameOver();
  hardGameWin();
}
