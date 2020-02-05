//start
const elementRum = document.querySelectorAll('input[name="rum"]');
const dagar = document.querySelector("#dag");
const elementTillägg = document.querySelectorAll('input[name="tillagg"]');
const elementKampanj = document.querySelector("#kampanjkod");
const elementButton = document.querySelector("button")
const elementP = document.querySelector("p")
//läs av bokningen
var rumPris;
var nätter;
var Tillägg;
var kampanj;
var totalPris

elementButton.addEventListener("click", matte);

function matte() {
    rumPris
    nätter = dagar.value
    Tillägg



    if (elementRum[0].checked == true) {
        rumPris = 300
    }
    if (elementRum[1].checked == true) {
        rumPris = 500
    }
    if (elementRum[2].checked == true) {
        rumPris = 800
    }
    if (elementTillägg[0].checked == true) {
        Tillägg = 100
    }
    if (elementTillägg[1].checked == true) {
        Tillägg = 200
    }
    if (elementTillägg[2].checked == true) {
        Tillägg = 100
    }
    if (elementTillägg[3].checked == true) {
        Tillägg = 50
    }
    totalPris = rumPris * nätter + Tillägg
    console.log(totalPris);

    //kampanjkod?
    kampanj = elementKampanj.value

    if (kampanj == "sportlov20") {
        totalPris = totalPris * 0,8;
    }

}
//räkna ut pris

//visa pris