function mostrarModal(humanSelection, computerSelection){

  
  const closeModal = document.getElementById('close');
  const humanOptionPlaceholder = document.querySelector('.human-option-placeholder');
  const computerOptionPlaceholder = document.querySelector('.computer-option-placeholder');
  
  
      let humanOptionImage= document.getElementById('human-option-placeholder');
      let computerOptionImage= document.getElementById('computer-option-placeholder');
      modalContainer.style.display='flex';
  
  
      if(humanSelection==='Rock'){
        humanOptionImage.src='../images/1.png';
        humanOptionPlaceholder.appendChild(humanOptionImage);
      }else if(humanSelection==='Paper'){
        humanOptionImage.src='../images/2.png';
        humanOptionPlaceholder.appendChild(humanOptionImage);
      }else if(humanSelection==='Scissors'){
        humanOptionImage.src='../images/3.png';
        humanOptionPlaceholder.appendChild(humanOptionImage);
      }



      if(computerSelection==='Rock'){
        computerOptionImage.src='../images/1.png';
        computerOptionPlaceholder.appendChild(computerOptionImage);
      }else if(computerSelection==='Paper'){
        computerOptionImage.src='../images/2.png';
        computerOptionPlaceholder.appendChild(computerOptionImage);
      }else if(computerSelection==='Scissors'){
        computerOptionImage.src='../images/3.png';
        computerOptionPlaceholder.appendChild(computerOptionImage);
      }
  
  
  closeModal.addEventListener('click', ()=>{
    modalContainer.style.display='none';
    humanOptionImage.src='';
  });

}

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

const modalContainer = document.querySelector('.modal-container');

const rockButton= document.querySelector("#Rock");

const paperButton= document.querySelector("#Paper");

const scissorsButton= document.querySelector("#Scissors");

const playAgainButton = document.getElementById('play-again');

let resultHuman=document.createElement("p");

let resultComputer=document.createElement("p");

let resultFinal=document.createElement("p");

let final= document.createElement("h3");
final.classList.add("final-text");

let draw= document.createElement("p");

let computerWins= document.createElement("p");

let humanWins= document.createElement("p");

let i=0;

rockButton.addEventListener("click", () => {
 
    i++;
    console.log(i);
    let humanSelection="Rock";
    let computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);

    resultFinal.textContent=`Human score is ${humanScore} and computer score is ${computerScore}`;
    results.appendChild(resultFinal);
    winnerCheck();
     mostrarModal(humanSelection,computerSelection);

});


paperButton.addEventListener("click", () => {
    i++;
    console.log(i);
    let humanSelection="Paper";
    let computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);

    resultFinal.textContent=`Human score is ${humanScore} and computer score is ${computerScore}`;
    results.appendChild(resultFinal);
    winnerCheck();
    mostrarModal(humanSelection,computerSelection);

});


scissorsButton.addEventListener("click", () => {
    i++;
    console.log(i);
    let humanSelection="Scissors";
    let computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);
    
    resultFinal.textContent=`Human score is ${humanScore} and computer score is ${computerScore}`;
    results.appendChild(resultFinal);
    winnerCheck();
    mostrarModal(humanSelection,computerSelection);

});

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

function winnerCheck(){
  if(i>5){
    playAgainButton.style.display='block';
    rockButton.disabled=true;
    paperButton.disabled=true;
    scissorsButton.disabled=true;

    if(humanScore===computerScore){
      final.textContent="FINAL";
      results.appendChild(final);
      draw.textContent=`Score is ${humanScore} for the human and ${computerScore} for the computer. Draw!!! `;
      results.appendChild(draw);
  }else if(humanScore<computerScore){
      final.textContent="FINAL";
      results.appendChild(final);
      computerWins.textContent=`Score is ${computerScore} for the computer and ${humanScore} for the human. The computer wins!!! `;
      results.appendChild(computerWins);
  }else{
      final.textContent="FINAL";
      results.appendChild(final);
      humanWins.textContent=`Score is ${humanScore} for the human and ${computerScore} for the computer. The human wins!!! `;
      results.appendChild(humanWins);
  }
  i=0;
  }
  
}

let humanScore=0;
let computerScore=0;

function playGame(){
  playAgainButton.style.display='none';
  humanScore=0;
  computerScore=0;
  final.textContent='';
  draw.textContent='';
  humanWins.textContent='';
  computerWins.textContent='';

    rockButton.disabled=false;
    paperButton.disabled=false;
    scissorsButton.disabled=false;
}

let startGame= document.getElementById('play-button');

startGame.addEventListener('click',()=>{
  playGame();
  
});
playAgainButton.addEventListener('click',()=>{
  playGame();
  modalContainer.style.display='none';
  

});