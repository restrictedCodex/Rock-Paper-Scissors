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
    const choice = ['p','r','s'];
    const randomNo = Math.floor(Math.random()*3);
    return choice[randomNo];
}


function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    else return "Scissors";
}



function game(userchoice) {
    const compChoice = getComputerChoice();
    switch (userchoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice, compChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userchoice, compChoice);
            break;        
    }
}

function win(userchoice, compChoice ) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToWord(userchoice) + " beats " + convertToWord(compChoice)+ " You win.";
    
}

function lose() {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convertToWord(userchoice) + " is beaten by" + convertToWord(compChoice)+ " You Lose.";
}

function draw() {
    result_div.innerHTML = convertToWord(userchoice) + " is same as" + convertToWord(compChoice)+ " Its a Draw.";
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