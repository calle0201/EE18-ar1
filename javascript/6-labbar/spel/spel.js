//global variables
var kort = [
    "svergies äldsta glasbruk drar igång",
    "Agatha christie debuterar",
    "koreakriget bryter ut",
    "svergies första film ifärg har premiär",
    "moulin rouge grundas i paris",
    "efter ha gästat sagoserien ett par gånger får vi nu möta pellefant, pip och laktristrollet i en egen tidning",
    "libyen blir självständigt",
    "stpatolskylten svergies första rörliga ljus reklam sätts upp",
    "amerikanen hunt tar patent på säkerhetsnålen",
    "vår älskade klasiker pralinasken aladdin börjar säljas"
];
var årtal = [
    "1742",
    "1920",
    "1950",
    "1946",
    "1889",
    "1965",
    "1951",
    "1909",
    "1935",
    "1939"
];


var slumptal;
var poäng = 0;
var varv = 10;
const elementFråga = document.querySelector("textarea")
const elementÅrtal = document.querySelector("#test");
const elementKnapp1 = document.querySelector("#button1");
const elementKnapp2 = document.querySelector("#b2");
const elementI1 = document.querySelector("#i1")
const elementI2 = document.querySelector("#i2")
const elementP = document.querySelector("#poäng")
const elementBody = document.querySelector("body")


function nyFråga() {
    slumptal = Math.floor(Math.random() * 10);
    console.log(slumptal);
    if (varv <= 0) {
       elementBody.style.visibility = "hidden"
    } else {
        varv--;
    }
    if (poäng == 10) {
        elementBody.innerHTML = "du van";
    } else {
        elementBody.innerHTML = "du förlorade" ;
    }

    elementFråga.value = kort[slumptal];
}
nyFråga();


elementKnapp1.addEventListener("click", svar);
elementKnapp2.addEventListener("click", nyFråga);

function svar() {
    var guess = elementÅrtal.value;
    console.log(guess);



    if (guess == årtal[0] && slumptal == 0) {
        elementI1.style.visibility = "visible";
        elementI2.style.visibility = "hidden";
        poäng++;
    } else if (guess == årtal[1] && slumptal == 1) {
        elementI1.style.visibility = "visible";
        elementI2.style.visibility = "hidden";
        poäng++;
    } else if (guess == årtal[2] && slumptal == 2) {
        elementI1.style.visibility = "visible";
        elementI2.style.visibility = "hidden";
        poäng++;
    } else if (guess == årtal[3] && slumptal == 3) {
        elementI1.style.visibility = "visible";
        elementI2.style.visibility = "hidden";
        poäng++;
    } else if (guess == årtal[4] && slumptal == 4) {
        elementI1.style.visibility = "visible";
        elementI2.style.visibility = "hidden";
        poäng++;
    } else if (guess == årtal[5] && slumptal == 5) {
        elementI1.style.visibility = "visible";
        elementI2.style.visibility = "hidden";
        poäng++;
    } else if (guess == årtal[6] && slumptal == 6) {
        elementI1.style.visibility = "visible";
        elementI2.style.visibility = "hidden";
        poäng++;
    } else if (guess == årtal[7] && slumptal == 7) {
        elementI1.style.visibility = "visible";
        elementI2.style.visibility = "hidden";
        poäng++;
    } else if (guess == årtal[8] && slumptal == 8) {
        elementI1.style.visibility = "visible";
        elementI2.style.visibility = "hidden";
        poäng++;
    } else if (guess == årtal[9] && slumptal == 9) {
        elementI1.style.visibility = "visible";
        elementI2.style.visibility = "hidden";
        poäng++;
    } else {
        elementI2.style.visibility = "visible";
        elementI1.style.visibility = "hidden";
    }
    elementP.textContent = "poäng: " + poäng;


};