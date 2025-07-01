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
    let humanChoice=prompt();
    return humanChoice;
}
