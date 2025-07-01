function computerChoice(){
    let generatedNum = Math.floor(Math.random() * 3);
    let choice=""
    switch(generatedNum){
        case 0:
            choice="rock";
            break;
        case 1:
            choice="paper";
            break;
        case 2:
            choice="scissor";
            break;
        default:
            console.log("Incorrect generated number");
            break;
    }
    return choice;
}

console.log(computerChoice());