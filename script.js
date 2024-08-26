/* STEP 1*/
/* Create the computer choice of rock, paper, scissors 
Math.random returns a number greater than or equal to
 0 and less than 1
 So, 1/3=0,33
 */ 
function getComputerChoice(){
    let randomNumber=Math.random();
    if(randomNumber<0.33){
        //If the number is less than 0,33 return Rock//
        return "Rock";
    }else if(randomNumber<0.66){
        ///If the number is up to 0,33 but is lower than 0.66 return paper//
        return "Paper"
    }else{
        //If the number is up to 0.66 return Scissors//
        return "Scissors"
    }
}


/* STEP 2 */
//Allows the user to put his option to play against the computer, and transform that user input into a 3 different options//
function getHumanChoice(userChoice){
    Choice=Choice.toLowerCase();
if(Choice==="rock"){
    return "Rock";
}else if(Choice==="paper"){
    return "Paper";
}else if (Choice==="scissors"){
    return "Scissors";
}else{
    return "Not a valid weapon";
}
}

 /* STEP 3*/
 //The entire system for play the game 5 times, count the scores of both the human and the computer, and decide a winner//

 // The logic for know who's the winner and the scores for one match//
 function playGame(){
    let humanScore=0;
    let computerScore=0;

    function playRound(computerChoice,humanChoice){
        if((humanSelection==="Paper" && computerSelection==="Rock")
            || (humanSelection==="Rock" && computerSelection==="Scissors")
            || (humanSelection==="Scissors" && computerSelection==="Paper")){
            humanScore++;

        }else if((computerSelection==="Paper" && humanSelection==="Rock")
            || (computerSelection==="Rock" && humanSelection==="Scissors")
            || (computerSelection==="Scissors" && humanSelection==="Paper")){
            computerScore++;
        
        }
    }

// Play 5 rounds, with their respective count of scores//
for(let i=1;i<=5;i++){
    console.log(`ROUND ${i}`);
    Choice=prompt(`Give me your weapon for round ${i} >:)`," ");
    humanSelection=getHumanChoice(Choice);
    computerSelection=getComputerChoice();
    console.log(`The human weapon for this round is: ${humanSelection}`);
    console.log(`The computer weapon for this round is: ${computerSelection}`);
    playRound(computerSelection,humanSelection);
    console.log(`Human score is ${humanScore} and computer score is ${computerScore}`);
}

//Decide who's the winner // 
if(humanScore===computerScore){
    console.log("FINAL");
    console.log(`The score is ${humanScore} for the human and ${computerScore} for the computer, Draw!!! `);
}else if(humanScore<computerScore){
    console.log("FINAL");
    console.log(`The score is ${computerScore} for the computer and ${humanScore} for the human, The computer wins!!! `);
}else{
    console.log("FINAL");
    console.log(`The score is ${humanScore} for the human and ${computerScore} for the computer, The human wins!!! `);
}

}

 console.log(playGame());