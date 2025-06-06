let userScoreDisplay = document.querySelector("#user-score");
let compScoreDisplay = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");


let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const gemCompChoice = () =>{
    const option = ["rock","paper","scissor"];
    const randId = Math.floor(Math.random() *3)
    return option[randId];
}

const drawGame= ()=>{
   console.log("the game was draw");
   msg.innerText = `The game was draw!`;
    
}

const showWinner=(userWin,compChoice)=>{
    if(userWin==true){
        userScore++;
        userScoreDisplay.innerText = `${userScore}`
        msg.innerText = `You won !!`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreDisplay.innerText = `${compScore}`
        msg.innerText = `Opps! You lost to ${compChoice}`
         msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("choice was clicked",userChoice);
    const compChoice = gemCompChoice();
    console.log("computer choice : ",compChoice);
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice=="rock"){
           userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice=="paper"){
            userWin = compChoice==="scissor" ? false : true;
        }
        else{
            userWin = compChoice==="rock"?false : true;
        }
        showWinner(userWin,compChoice);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    })
})
