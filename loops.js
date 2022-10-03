//1. luo for-silmukka joka tulostaa luvut 0-10. 
//Tee sama while ja do while silmukalla.
for( let i = 0; i < 11; i++){
    console.log(i);
}
//2. luo for-silmukka joka tulostaa luvut 10-0.
// Tee sama while ja do while silmukalla.
for(let j = 10; j > -1; j--){
    console.log(j);
}
let x = 10;
while (x > -1){
    console.log(x);
    x--;
}
let y = 10;
do{
    console.log(y);
    y--;
}while(y > -1);
//3. Luo silmukka joka tulostaa seuraavan kuvion:
//
//#
//##
//###
//####
//#####
//######
//#######
let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);