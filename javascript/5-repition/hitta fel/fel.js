/* Element vi arbetar med */
elementInput1 = document.querySelector('#input1');
elementInput2 = document.querySelector('#input2');
elementResultat = document.querySelector('#resultat');
elementKnapp = document.querySelector('#knapp');

/* Lyssnar på knappen */
elementKnapp.addEventListener('click', area);

function area() {
    /* Deklaration av variabler */
    var bredd;
    var hojd;    // Bredd och höjd som användaren anger i textfälten
    var area;           // Arean för ett objekt
    var area2;           // Arean för ett objekt
    var area3;           // Arean för ett objekt

    bredd = elementInput1.value
    hojd = elementInput2.value

    area = bredd * hojd;
    elementResultat.innerHTML = "Arean för en rektangel är " + area + "<br><br>";

    area2 = bredd * hojd / 2;
    elementResultat.innerHTML += "Arean för en triangel är " + area2 + "<br> <br>";

    area3 = 3.14159265359 * bredd / 2 * hojd / 2;
    elementResultat.innerHTML += "Arean för en oval är " + area3 + "<br><br>";
}