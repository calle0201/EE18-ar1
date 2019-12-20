

//kod som körs vid start

//element
const elementImg = document.querySelector("img");
const elementP2 = document.querySelector("#p2")
var number = 1

//kod som körs efter start, när man klickar på bild
function rotateLeft() {
    
    if (number != 8  ) {
        number = number + 1
    } else {
        number = 1
    }
    elementImg.src = "./bilder/foto" + number + ".jpg";
    elementP2.textContent = number;
}
function rotateRight() {
    
     if (number  != 1) {
         number = number - 1
     } else {
        number = 8
     }
     
     elementImg.src = "./bilder/foto" + number + ".jpg";
     elementP2.textContent = number;
}