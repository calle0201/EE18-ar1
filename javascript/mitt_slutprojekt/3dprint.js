//info about canvas
const eCanvas = document.querySelector("#first_layer");
eCanvas.width = 400;
eCanvas.height = 400;

//start canvas
var ctx = eCanvas.getContext("2d");

//elements used / buttons
const buttonCube = document.getElementById("cube");
const buttonTriangle = document.getElementById("tringle");
const buttonCircle = document.getElementById("circle")

//event listeners for buttons
buttonCube.addEventListener("click", callCube)
buttonTriangle.addEventListener("click", callTriangle)
buttonCircle.addEventListener("click", callCircle)
//varibles 
var i = 0
var interval;





function callCircle() {
    ctx.clearRect(0, 0, eCanvas.width*2, eCanvas.height*2);
    ctx.beginPath();
    clearInterval(interval);
//start for first layer ish of a cube
 interval =  setInterval(drawCircle, 40)
}
function callCube() {
    //clears earlier layers
    ctx.clearRect(0, 0, eCanvas.width*2, eCanvas.height*2);
    ctx.beginPath();
    clearInterval(interval);
//start for first layer ish of a cube
 interval =  setInterval(drawCube, 10)
}
function callTriangle() {
    //clears earlier layers
    ctx.clearRect(0, 0, eCanvas.width*2, eCanvas.height*2);
   
    ctx.beginPath()
    clearInterval(interval);
    //start for first layer ish of a cube
 interval =  setInterval(drawTriangle, 10);
}



function drawTriangle() {
   //start the layer of a triangle
   if (i < 10) {
       i = 199
   }
    if (i == 200) {
        ctx.beginPath();
        ctx.moveTo(200, 200)
        ctx.lineWidth = 10
    }
    i++
     if (i <= 300 && i > 200) {
     ctx.lineTo(i ,i )
ctx.stroke()
    } else if (i <= 450) {
        
        ctx.lineTo(-i +600 ,300 )
        ctx.stroke()
    } else if (i <= 460) {
        
        ctx.lineTo( 200 , 200)
        ctx.stroke()
}else if (i <= 461) {
    
    ctx.lineTo(300,300)
    ctx.lineTo(200,300)
    ctx.fill()
   
} else if (i == 501) {
    i = 0
    clearInterval(interval);
}
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
function drawCircle() {
 i++
      console.log(i);
      
    if (i <= 52) {
        ctx.beginPath();
        ctx.lineWidth = 10
        //varför göra detta att det funkar gjorde mindre korade sätt och det funka inte
        ctx.arc(200, 200, 100,0,i/8)
        ctx.stroke()
    
        

        //same youtube vid
       
    } else {
        i = 0
        clearInterval(interval);
    }
}
