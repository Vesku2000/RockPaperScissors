//let playerChoice = prompt("Pelase enter rock, paper, or scissors.");
let computer = "rock";
const playerChoice = document.querySelector('.guessField');

if(playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){

        let randomNumber = Math.floor(Math.random() * 3) + 1;
        console.log(randomNumber);

        if(randomNumber === 1){
            computer = "rock";
        }else if(randomNumber === 2){
            computer = "scissors";
        }else{
            computer = "paper";
        }

        console.log(computer);
    }else{
        alert("You didn't enter rock, paper or scissors");
    }

    if(playerOne === computer){
        console.log("Tie game!");
    }else if(playerOne === "rock"){
        if(computer === "paper"){
            console.log("computer wins");
        }else{
            console.log("player wins");
        }
    }else if(playerOne === "paper"){
        if(computer === "scissors"){
           console.log("computer wins");
        }else{
            console.log("Player wins");
        }
    }else {
        if(computer === "rock"){
            console.log("Computer wins");
        }else{
            console.log("Player wins");
        }
    }
} else {
    console.log("no input");
}