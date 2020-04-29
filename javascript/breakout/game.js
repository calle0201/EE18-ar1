var canvas = document.getElementById("breakout");
var ctx = canvas.getContext("2d");

canvas.style.border = "1px solid #0ff"

const PADDLE_WIDTH = 100;
const PADDLE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 20;

const paddle =  {
    x : canvas.width/2 - PADDLE_WIDTH/2,
    y:canvas.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT, 
    width:  PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    dx: 5
}

function drawPaddle() {
    ctx.fillstyle = "#2e3548"
    ctx.fillRect(paddle.x,paddle.y,paddle.width,paddle.height);
}

drawPaddle();