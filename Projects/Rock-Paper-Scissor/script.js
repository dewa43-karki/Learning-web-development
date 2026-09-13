let playerScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".player-side .choice");
const botScoreElement = document.querySelector("#bot-score");
const playerScoreElement = document.querySelector("#player-score");

const botChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const draw = () => {
    console.log("It's a tie!");
};

const showResult = (playerWin) => {
    if (playerWin) {
        playerScore++;
        playerScoreElement.innerText = playerScore;
        console.log("Player wins! Score:", playerScore, "-", botScore);
    } else {
        botScore++;
        botScoreElement.innerText = botScore;
        console.log("Bot wins! Score:", playerScore, "-", botScore);
    }
};

const game = (playerChoice) => {
    console.log("player choice =", playerChoice);
    const botSelection = botChoice();
    console.log("bot choice =", botSelection);

    if (playerChoice === botSelection) {
        draw();
    }
    else {
        let playerwin = true;
        if (playerChoice === "rock" && botSelection === "paper"){
            playerwin = false;
        }
        else if (playerChoice === "paper"){
            playerwin = botSelection === "scissors" ? false : true;
        }
        else if (playerChoice === "scissors" && botSelection === "rock"){
            playerwin = false;
        }
        showResult(playerwin);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.className.match(/rock|paper|scissors/)[0];
        game(playerChoice);
    });
});