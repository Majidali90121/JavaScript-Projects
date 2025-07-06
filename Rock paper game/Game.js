let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg")//return a value
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")
let para = document.querySelector(".par")
const choices = document.querySelectorAll(".choice")//return a value

const showwinner = (userwin,userChocie,compChoice) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! ${userChocie} beats ${compChoice}`;
        msg.style.backgroundColor="green"
         
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You loss.  ${compChoice} beats ${userChocie}`
        msg.style.backgroundColor = "red"
    }
    if (userScore == 10) {
        para.innerText = "You win"
        para.style.backgroundColor = "purpel"

    } else if (compScore == 10){
        para.innerText = "you losss"
        para.style.backgroundColor = "red"

    }
}
const genPcchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return option[rand];
    //rack paper secissors
    
}
const drawGame = () => {
    console.log("draw game")
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31"
}
const playGame = (userChocie) => {
    //genrate Pc choice -> modular
    const compChoice = genPcchoice();
    if (userChocie == compChoice) {
        //draw game
        drawGame()
    }
    else {
        let userwin = true;
        if (userChocie == "rock") {
            //scissor
            userwin = compChoice === "paper" ? false : true
        } else if (userChocie == "Paper") {
            userwin = compChoice === "scissor" ? false : true
        } else {
            userwin = compChoice === "rock" ? false : true
        }
        showwinner(userwin, userChocie, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChocie = choice.getAttribute("id");
        playGame(userChocie)
    })
})
