//1. showMyFirstName, joka palauttaa oman nimesi
function showMyFirstName() {
    return "Valtteri"
}

console.log(showMyFirstName());
//2. showMyFullName, joka ottaa vastaan parametrit firstName ja lastName ja palauttaa ne yhdessä
function showMyFullName(firstName, LastName) {
   return firstName + " " + LastName;
}

console.log(showMyFullName("Valtteri", "Syrjanen"));
//3. ageInDogYears, joka ottaa vastaan iän ja muuntaa sen koiran iäksi kaavalla: ikä+(ikä*7)
function ageInDogYears(ika) {
   return ika + (ika*7);
}
console.log(ageInDogYears(5));
//4. convertTemperature, joka ottaa vastaan lämpötilan ja joko F tai C merkin. 
//Jos merkki on F muunnetaan annettu luku celsius-asteiksi (etsi kaavat itse)
//Jos merkki on C muunnetaan  annettu luku fahrenheit-asteiksi

function convertTemperature(lampotila, muuttuja){
   const celsius = "c";
   const fahrenheit = "f";
   var uusiLampo;
   if(muuttuja.includes(celsius)){
       uusiLampo = lampotila * 1.8 + 32;
       console.log(uusiLampo.toFixed(1) + " " + "Faarenhaittia");
   }else if(muuttuja.includes(fahrenheit)){
       uusiLampo = (lampotila - 32) / 1.8;
       console.log(uusiLampo.toFixed(1) + " " + "Celsiusta");
   }
}

console.log(convertTemperature( 11, "c"));
//5. checkPalindrome, joka ottaa vastaan merkkijonon
//palauttaa "true" jos merkkijono oli palindromi (sama molemminpäin vrt. saippuakauppias)
//palauttaa "false" jos merkkijono ei ollut palindromi
//etsi itse tietoa miten merkkijonon voi kääntää (reverse string)
function checkPalindrome(string){

   const len = string.length;

  
   for (let i = 0; i < len / 2; i++) {

 
       if (string[i] !== string[len - 1 - i]) {
           return 'false';
       }
   }
   return 'true';
}
console.log(checkPalindrome("kissa"));



//6. generateIPAdd, joka palauttaa sattumanvaraisen IP-osoitteen (esim. 168.1.1.123)

function generateIPAdd(){
   var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
   return ip;
}
var ip = generateIPAdd();
console.log(ip);

//concatenation of strings: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings

//7. checkIfSame, joka ottaa vastaan 3 numeroa ja
//palauttaa true jos joukossa on vähintään 2 samaa numeroa
function checkIfSame(a, b, c){
    const values = [a, b, c];
    console.log(values);

    const set = new Set(values);

    const duplicates = values.filter(item => {
        if(set.has(item)){
            set.delete(item);
        }else{
            return item;
        }
    });
    console.log("kaksi kertaa luku: " + duplicates);
}

checkIfSame(5, 5, 2)
//palauttaa false jos joukossa ei ole samoja numeroita
//esim. syöte checkIfSame(5,54,54) tulostaa true (kaksi kertaa 54)