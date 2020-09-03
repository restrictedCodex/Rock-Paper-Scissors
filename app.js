let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".Score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choice = ['r','p','s'];
    const randomNo = Math.floor(Math.random()*3);
    return choice[randomNo];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    else return "Scissors";
}

const smallUser = "User".fontsize(3).sub();
const smallComp = "Comp".fontsize(3).sub();

function win(userchoice, compChoice ) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToWord(userchoice) + smallUser + " beats "  + convertToWord(compChoice)+ smallComp +" You win.";
    document.getElementById(userchoice).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userchoice).classList.remove("green-glow");}, 500);
}

function lose(userchoice,compChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convertToWord(userchoice) + smallUser + " is beaten by " + convertToWord(compChoice)+ smallComp + " You Lose.";
    document.getElementById(userchoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userchoice).classList.remove("red-glow");}, 500);
}

function draw(userchoice,compChoice) {
    result_div.innerHTML = convertToWord(userchoice) + smallUser+ " is same as " + convertToWord(compChoice)+ smallComp + " Its a Draw.";
    document.getElementById(userchoice).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(userchoice).classList.remove("grey-glow");}, 500);
}


function game(userchoice) { 
    const compChoice = getComputerChoice();
    switch (userchoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice,compChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userchoice,compChoice);
            break;         
    } 

}



function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })
        
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();