
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
 let Choice=prompt("Give me your weapon >:)","");
 console.log(getHumanChoice(Choice));


 /* STEP 3*/
 //The system for play the game 5 times, count the scores of both the human and the computer, and decide a winner//
 const humanSelection=getHumanChoice();
 const computerSelection= getComputerChoice();
 function playGame(){
    let humanScore=0;
    let computerScore=0;

    function playRound(computerChoice,humanChoice){
        if(humanSelection===computerSelection){
            humanScore++;
            computerScore++;
            return `Draw!, the score is  ${humanScore} for human
            and ${computerScore} for computer`;
        
        
        }else if((humanSelection==="Paper" && computerSelection==="Rock")
                  || (humanSelection==="Rock" && computerSelection==="Scissors")
                  || (humanSelection==="Scissors" && computerSelection==="Paper")){
            humanScore++;
            return `Human beats!, the score is  ${humanScore} for human
            and ${computerScore} for computer`;
        
        
        }else if((computerSelection==="Paper" && humanSelection==="Rock")
            || (computerSelection==="Rock" && humanSelection==="Scissors")
            || (computerSelection==="Scissors" && humanSelection==="Paper")){
        computerScore++;
        return `Computer beats!, the score is  ${humanScore} for human
        and ${computerScore} for computer`;
        }
         }
for(let i=0;i<=5;i++){
    playRound(computerChoice,humanChoice);
    console.log("banana");
}
 }
 console.log(playGame());