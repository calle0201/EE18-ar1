//info about canvas
const eCanvas = document.querySelector("#first_layer")
eCanvas.width = 400;
eCanvas.height = 400;

//start canvas
var ctx = eCanvas.getContext("2d");

//elements used / buttons
const buttonCube = document.getElementById("cube")
const buttonTriangle = document.getElementById("tringle")

//event listeners for buttons
buttonCube.addEventListener("click", callCube)
buttonTriangle.addEventListener("click", callTriangle)

//varibles 
var i = 1
var interval;

function callCube() {
    //clears earlier layers
    ctx.clearRect(0, 0, eCanvas.width, eCanvas.height);
//start for first layer ish of a cube
 interval =  setInterval(drawCube, 10)
}
function callTriangle() {
    //clears earlier layers
    ctx.clearRect(0, 0, eCanvas.width, eCanvas.height);
    //start for first layer ish of a cube
 interval =  setInterval(drawTriangle, 10)
}



function drawTriangle() {
    
}


function drawCube() {
//the first layer of a cube
    if (i == 1) {
        ctx.beginPath();
        ctx.moveTo(10, 10)
    }
    i++
    if (i <= 200) {
        ctx.fillRect(10, 10, i, 20)
        ctx.fill()

    } else if (i <= 400) {
        ctx.fillRect(190, 20, 20, i - 200)
        ctx.fill()
    } else if (i <= 575) {
        ctx.fillRect(190, 200, -i + 400, 20)
        ctx.fill()
    } else if (i <= 780) {
        ctx.fillRect(10, 206, 20, -i + 590)
        ctx.fill()
    } else if (i <= 950) {
        ctx.fillRect(i -770, 10, 10, i -750)
        ctx.fill()
    } else if (i <= 1120) {
    ctx.fillRect(200, 200, -i+950 , -i+ 950)
    ctx.fill()
    
} else if (i == 1121) {
    i = 0
    clearInterval(interval);
}
}