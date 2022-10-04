//4. Luo silmukka joka tulostaa seuraavaa:
//
//0 x 0 = 0
//1 x 1 = 1
//2 x 2 = 4
//3 x 3 = 9
//4 x 4 = 16
//5 x 5 = 25
//6 x 6 = 36
//7 x 7 = 49
//8 x 8 = 64
//9 x 9 = 81
//10 x 10 = 100
console.log("tehtävä 4");
let a = 0;
for(let i = 0; i < 11; i++){
    console.log(a + " x " + a + " = " + a*a);
    a++;
}
console.log("tehtävä 5");
//5. Luo silmukka joka tulostaa seuraavaa:
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
let row1 = 0;
let row2 = 0;
let row3 = 0;

let t = 0
    do{console.log("i  " + "i^2  " + "i^3")
    }while(t > 0)
for( let x = 0; x < 11; x++){
    
    console.log(x + "   " + row2*x + "   " + row3*x*x);
    row1++;
    row2++;
    row3++;
}
console.log("tehtävä 6");
//6. Luo silmukka joka käy läpi luvut 0-100 
//ja tulostaa vain tasaluvut.

for(let x = 0; x < 101; x++){
    if(x % 2 == 0){
        console.log(x);
    }
}

//7. Luo for-silmukka joka käy läpi luvut 0-200 ja
// tulostaa niiden yhteissumman.
console.log("tehtävä 7");
let summa = 0;
for(let x = 0; x < 201; x++){
    summa = summa + x;
    
}

console.log(summa);
//8. Luo ohjelma joka generoi taulukon jossa on
//5 sattumanvaraista numeroa

console.log("tehtävä 8");
let maxNum = 100;
let minNum = 1;

for(let x = 0; x < 5; x++){
    console.log(Math.floor(Math.random() * maxNum));
}
console.log("tehtävä 9");
//9. Luo ohjelma joka generoi taulukon
// jossa on 5 sattumanvaraista UNIIKKIA numeroa

let numExist = [];
for(let x = 0; x < 5; x++){
    let num = Math.floor(Math.random() * maxNum);
    numExist.push(num);
    for(let i = 0; i < numExist.length - 1; i++){
        if(num == numExist[i]){
            console.log("num exist");
        }
    }
    console.log(num);
}
console.log(numExist.length);
//10. Luo ohjelma joka generoi 8 merkkiä pitkän satunnaisia merkkejä sisältävän tunnuksen, esim. 57MGS8F1
function generatePassword(passwordLength) {
    var numberChars = "0123456789";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var allChars = numberChars + upperChars + lowerChars;
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  console.log(generatePassword(8));
//11. Luo ohjelma joka generoi sattumanvaraisen värin rgb-arvona. Esim. rgb(240,180,80)
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  

    console.log(getRandomRgb());
  
//12. Luo ohjelma joka ottaa vastaan alla olevan taulukon ja tulostaa "NASA"
const minorPlanets = [
    "Newtonia",
    "Arecibo",
    "Sibelius",
    "Ariane"
]


    
    for(const brand of minorPlanets){
        console.log(brand[0]);
        
    }

//const minorPlanets = ["Newtonia", "Arecibo", "Sibelius", "Ariane"];