function mostrarModal(humanSelection, computerSelection){

  
  const closeModal = document.getElementById('close-button');
  const humanOptionPlaceholder = document.querySelector('.human-option-placeholder');
  const computerOptionPlaceholder = document.querySelector('.computer-option-placeholder');
  
  
      let humanOptionImage= document.getElementById('human-option-placeholder');
      let computerOptionImage= document.getElementById('computer-option-placeholder');
      modalContainer.style.display='flex';
  
  
      if(humanSelection==='Rock'){
        humanOptionImage.src='../Rock-Paper-Scissors/images/1.webp';
        humanOptionPlaceholder.appendChild(humanOptionImage);
      }else if(humanSelection==='Paper'){
        humanOptionImage.src='../Rock-Paper-Scissors/images/2.webp';
        humanOptionPlaceholder.appendChild(humanOptionImage);
      }else if(humanSelection==='Scissors'){
        humanOptionImage.src='../Rock-Paper-Scissors/images/3.webp';
        humanOptionPlaceholder.appendChild(humanOptionImage);
      }



      if(computerSelection==='Rock'){
        computerOptionImage.src='../images/1.webp';
        computerOptionPlaceholder.appendChild(computerOptionImage);
      }else if(computerSelection==='Paper'){
        computerOptionImage.src='../images/2.webp';
        computerOptionPlaceholder.appendChild(computerOptionImage);
      }else if(computerSelection==='Scissors'){
        computerOptionImage.src='../images/3.webp';
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

const playAgainButton = document.getElementById('play-again-button');

let resultHuman=document.createElement("p");

let resultComputer=document.createElement("p");

let numberRounds = document.getElementById('number-rounds');

let scoreHuman= document.getElementById('human-score');

let scoreComputer= document.getElementById('computer-score');

let final= document.createElement("h3");
final.classList.add("final-text");

const HumanPointIcon = document.querySelector('.point_image.human');

const ComputerPointIcon = document.querySelector('.point_image.computer');

const DrawIcon = document.getElementById('draw');

let drawWins = document.getElementById('final-draw');

let computerWins= document.getElementById('final-computer')

let humanWins= document.getElementById('final-human');

let i=0;

const langButtons = document.querySelectorAll("[data-language]");

const textsToChange = document.querySelectorAll("[data-section]");





rockButton.addEventListener("click", () => {
 
    i++;
    numberRounds.innerHTML=i;
    let humanSelection="Rock";
    let computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);

    scoreHuman.innerHTML= humanScore;
    scoreComputer.innerHTML= computerScore;

    winnerCheck();
     mostrarModal(humanSelection,computerSelection);

});


paperButton.addEventListener("click", () => {
    i++;
    numberRounds.innerHTML=i;
    let humanSelection="Paper";
    let computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);

    scoreHuman.innerHTML= humanScore;
    scoreComputer.innerHTML= computerScore;

    winnerCheck();
    mostrarModal(humanSelection,computerSelection);

});


scissorsButton.addEventListener("click", () => {
    i++;
    numberRounds.innerHTML=i;
    let humanSelection="Scissors";
    let computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);
    
   scoreHuman.innerHTML= humanScore;
    scoreComputer.innerHTML= computerScore;

    winnerCheck();
    mostrarModal(humanSelection,computerSelection);

});

function playRound(computerSelection, humanSelection){
        if((humanSelection==="Paper" && computerSelection==="Rock")
            || (humanSelection==="Rock" && computerSelection==="Scissors")
            || (humanSelection==="Scissors" && computerSelection==="Paper")){
            humanScore++;
            DrawIcon.style.display='none';
            ComputerPointIcon.style.display='none'
            HumanPointIcon.style.display='block'


        }else if((computerSelection==="Paper" && humanSelection==="Rock")
            || (computerSelection==="Rock" && humanSelection==="Scissors")
            || (computerSelection==="Scissors" && humanSelection==="Paper")){
            computerScore++;
            DrawIcon.style.display='none';
            HumanPointIcon.style.display='none'
            ComputerPointIcon.style.display='block'
        
        }else{
          HumanPointIcon.style.display='none'
          ComputerPointIcon.style.display='none'
          DrawIcon.style.display='block';
        }
    }

function winnerCheck(){
  if(i>=5){
    playAgainButton.style.display='block';
    rockButton.disabled=true;
    paperButton.disabled=true;
    scissorsButton.disabled=true;

    if(humanScore===computerScore){
      final.textContent="FINAL";
      results.appendChild(final);
     
      drawWins.style.display='block';
      
  }else if(humanScore<computerScore){
      final.textContent="FINAL";
      results.appendChild(final);
     
      computerWins.style.display='block';
      
  }else{
      final.textContent="FINAL";
      results.appendChild(final);
    
       humanWins.style.display='block';
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
  drawWins.style.display='none';
      computerWins.style.display='none';
       humanWins.style.display='none';
  

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

langButtons.forEach((button) =>{
  button.addEventListener('click',()=>{
    console.log(button.dataset.language);
    fetch(`../languages/${button.dataset.language}.json`)
    .then(result => result.json())
    .then(data =>{
      textsToChange.forEach((element)=>{
        console.log(textsToChange);
        const section = element.dataset.section;
        const value = element.dataset.value;

        element.innerHTML = data[section][value];
      })
    })
  })
});