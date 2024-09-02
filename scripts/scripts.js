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

const results= document.querySelector("#Results");

const rockButton= document.querySelector("#Rock");

const paperButton= document.querySelector("#Paper");

const scissorsButton= document.querySelector("#Scissors");

let resultHuman=document.createElement("p");

let resultComputer=document.createElement("p");

let resultFinal=document.createElement("p");

let final= document.createElement("h3");

let draw= document.createElement("p");

let computerWins= document.createElement("p");

let humanWins= document.createElement("p");

let i=0;


function playGame(){
let humanScore=0;

let computerScore=0;

    function playRound(computerSelection, humanSelection){
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

    rockButton.disabled=false;
    paperButton.disabled=false;
    scissorsButton.disabled=false;


rockButton.addEventListener("click", () => {
    i+=1;
    console.log(i);
    let humanSelection="Rock";
    let computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);
    resultHuman.textContent=`The human weapon for this round is: ${humanSelection}`;
        results.appendChild(resultHuman);
    resultComputer.textContent=`The computer weapon for this round is: ${computerSelection}`;
      results.appendChild(resultComputer);
    resultFinal.textContent=`Human score is ${humanScore} and computer score is ${computerScore}`;
      results.appendChild(resultFinal);
    winnerCheck();

});


paperButton.addEventListener("click", () => {
    i+=1;
    console.log(i);
    let humanSelection="Paper";
    let computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);
    resultHuman.textContent=`The human weapon for this round is: ${humanSelection}`;
      results.appendChild(resultHuman);
    resultComputer.textContent=`The computer weapon for this round is: ${computerSelection}`;
      results.appendChild(resultComputer);
    resultFinal.textContent=`Human score is ${humanScore} and computer score is ${computerScore}`;
      results.appendChild(resultFinal);
    winnerCheck();

});


scissorsButton.addEventListener("click", () => {
    i+=1;
    console.log(i);
    let humanSelection="Scissors";
    let computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);
    resultHuman.textContent=`The human weapon for this round is: ${humanSelection}`;
      results.appendChild(resultHuman);
    resultComputer.textContent=`The computer weapon for this round is: ${computerSelection}`;
      results.appendChild(resultComputer);
    resultFinal.textContent=`Human score is ${humanScore} and computer score is ${computerScore}`;
      results.appendChild(resultFinal);
    winnerCheck();

});

function winnerCheck(){
  if(i>5){
    rockButton.disabled=true;
    paperButton.disabled=true;
    scissorsButton.disabled=true;

    if(humanScore===computerScore){
      final.textContent="FINAL";
      results.appendChild(final);
      draw.textContent=`Score is ${humanScore} for the human and ${computerScore} for the computer, Draw!!! `;
      results.appendChild(draw);
  }else if(humanScore<computerScore){
      final.textContent="FINAL";
      results.appendChild(final);
      computerWins.textContent=`Score is ${computerScore} for the computer and ${humanScore} for the human, The computer wins!!! `;
      results.appendChild(computerWins);
  }else{
      final.textContent="FINAL";
      results.appendChild(final);
      humanWins.textContent=`Score is ${humanScore} for the human and ${computerScore} for the computer  The human wins!!! `;
      results.appendChild(humanWins);
  }
  }
}

}

let startGame= prompt("Do you want to start the game? Y/N");
if(startGame==="Y"){
    playGame();
}else{
  alert("Ok :(");
};