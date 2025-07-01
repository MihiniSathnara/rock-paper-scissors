function getComputerChoice(){
    let generatedNum = Math.floor(Math.random() * 3);
    let computerChoice=""
    switch(generatedNum){
        case 0:
            computerChoice="rock";
            break;
        case 1:
            computerChoice="paper";
            break;
        case 2:
            computerChoice="scissor";
            break;
        default:
            console.log("Incorrect generated number");
            break;
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice=prompt("Enter your choice(rock, paper, scissors) :");
    return humanChoice;
}

let computerScore=0;
let humanScore=0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice=="rock" && computerChoice=="paper"){
        console.log("You lose! Paper beats rock :(");
        computerScore++;
    }else if(humanChoice=="rock" && computerChoice=="scissor"){
        console.log("You win! Rock beats scissor :)");
        humanScore++;
    }else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("You win! Paper beats rock :)");
        humanScore++;
    }else if(humanChoice=="paper" && computerChoice=="scissor"){
        console.log("You lose! Scissor beats paper :(")
        computerScore++;
    }else if(humanChoice=="scissor" && computerChoice=="rock"){
        console.log("You lose! Rock beats scissor :(");
        computerScore++;
    }else if(humanChoice=="scissor" && computerChoice=="paper"){
        console.log("You win! Scissor beats paper :)");
        humanScore++;
    }else{
        console.log("Draw");
    }
}

const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();

playRound(humanSelection, computerSelection);