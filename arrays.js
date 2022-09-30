
//1. Luo tyhjä taulukko.
var array = [];
//2. Luo taulukko jossa on enemmän kuin 5 elementtiä
var arrayOfFive = [1, 2, 3, 4, 5]
//3. Tulosta taulukon pituus (lenght)
console.log(arrayOfFive.length);
//4. Tulosta taulukon ensimmäinen, keskimmäinen ja viimeinen tietue
console.log(arrayOfFive[0], arrayOfFive[4]);
//5. Luo taulukko mixedDataTypes, sijoita sinne tietoa erilaisissa tietotyypeissa ja tulosta taulukon pituus. 
//Taulukon koko pitää olla yli 5 tietoa.
var mixedDataTypes = [
    true, 5, "Valtteri", false, 10
]
console.log(mixedDataTypes[2]);
//6. Luo taulukko itCompanies ja sijoita sinne arvot "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IMB", "Oracle", "Amazon"]
//7. Tulosta taulukko console.log komennolla
console.log(itCompanies);
//8. Tulosta montako tietuetta taulukossa on
console.log(itCompanies.length);
//9. Tulosta ensimmäinen, keskimmäinen ja viimeinen yrityksen nimi
console.log(itCompanies[0], itCompanies[itCompanies.length - 1]);
//10. Tulosta kaikkien yritysten nimi
console.log(itCompanies);
//11. Tulosta taulukon sisältö lausemuodossa: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies[0],", ",itCompanies[1],", ",itCompanies[2], ", ",itCompanies[3],", ",itCompanies[4],", ",
itCompanies[5], "and ", itCompanies[6], "are big IT companies" );
//12. Tarkista koodin avulla esiintyykö taulukossa määrätty yritys ja jos EI esiinny niin palautetaan "Yritystä ei löytynyt"
function checkCompany(company){
    var i = 0;
    while( i < itCompanies.length + 1){
        if(company === itCompanies[i]){
            console.log("yritys: " + itCompanies[i] + " löytyi!");
            return true;
        }
        i++;
    }

    console.log("Yritystä ei löytynyt");
}

checkCompany("IMB");
//13. Tulosta yritykset, mutta filtteröi pois yrityksen joiden nimessä on enemmän kuin yksi 'o'-kirjain
var letter = "";
function checkChars(letter){
    var count = 0;
    console.log(letter);
    console.log(itCompanies.length);
    for(let i = 0; i < itCompanies.length -1; i++){
        console.log("first loop");
        for(let j = 0; j < itCompanies[i].length; j++){
            console.log("second loop");
            for(let c = 0; c < itCompanies[i].length; c++){
            if(itCompanies[i].charAt(c) === letter){
                console.log("checking letters");
                count++;
            }}
            return count;
        }
    }

    if(count >= 2){
        console.log("there is more than 2 o letter");
    }
}

checkChars("o");
//14. Tulosta yritykset käyttäen sort()-metodia
console.log(itCompanies.sort());
//15. Käännä taulukon järjestys käyttäen reverse()-metodia
console.log(itCompanies.reverse());
//16. Poista (slice out) taulukosta 3 ensimmäistä yritystä
console.log(itCompanies.slice(3));
//17. Poista (slice out) taulukosta 3 viimeistä yritystä
console.log(itCompanies.slice(0, -3));
//18. Poista (slice out) keskimmäinen tai keskimmäiset yritykset taulukosta

//19. Poista ensimmäinen yritys taulukosta
console.log(itCompanies.slice(1));
console.log(itCompanies);
//20. Poista viimeinen yritys taulukosta
console.log(itCompanies.splice(itCompanies.length -1, 1));
//21. Poista kaikki yritykset taulukosta

//22. Luo kaksiulotteinen taulukko ja esitä esimerkki miten haet sieltä valitun tiedon.