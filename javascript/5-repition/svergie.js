//start
const elementInput = document.querySelector("input");
const elementButton = document.querySelector("button")
const elementOutput = document.querySelector("textarea")

//läs av ålder
elementButton.addEventListener("click", ÅldersKoll );

//kolla up åldersgräns
function ÅldersKoll() {
    var ålder = elementInput.value;
    console.log(ålder);
    if (ålder > 12) {
    elementOutput.value =    "Om du har fyllt 13 år, får du utföra lättare arbete som inte är skadligt för din hälsa, utveckling eller skolgång. Om du är under 13 år får du inte arbeta."
    }
     if (ålder > 14) {
        elementOutput.value = "Du blir straffmyndig. Det betyder att du kan straffas för ett brott. Du får köra moped (klass 1). Du får se barnförbjudna filmer på bio. Om din cykel eller moped har lämpliga säten, får du skjutsa en person. Personen måste vara yngre än 10 år. Sex: Lagen säger att man i princip inte får ha sex med någon som är under 15 år. Men lagen är inte till för att förbjuda två som är lika gamla eller ungefär lika gamla från att ha sex med varandra utan för att förhindra att en äldre person utnyttjar någon som är yngre."
    } 
     if (ålder > 17) {
        elementOutput.value = "Du blir myndig. Du får gifta dig. Du får rösta. Du får köpa cigaretter. Du får köpa alkohol på restaurang och öl i affärer. Du får ta körkort."
    } 
     if (ålder > 18) {
        elementOutput.value = "Skolplikten upphör när du gått ut nionde klass. Du får ta ett normalt, riskfritt arbete, det vill säga jobba 40 timmar i veckan. Men arbetsgivaren har lite mer ansvar för dig som inte är myndig än för dina myndiga arbetskamrater. Du får starta egen firma. Du får själv bestämma över de pengar du tjänar.  Du får ta körkort för lätt motorcykel och traktor. Du får börja övningsköra bil. Du får anmäla flyttning och skriva under din anmälan själv. Dina föräldrar får inte längre barnbidrag för dig. Nu får du istället studiebidrag om du studerar."
    }
    
    
}
//Skriv svar