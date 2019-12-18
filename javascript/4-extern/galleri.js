//kod som körs vid start

//element
const elementBildruta = document.querySelector("#bildruta");

//kod som körs efter start, när man klickar på bild
function visaBild(nr) {
    
    elementBildruta.innerHTML = "<img src=\"./bilder/foto"+ nr +".jpg\"\" alt=\"foto1\"></img>"
}