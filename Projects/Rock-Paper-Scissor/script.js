let playerScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".player-side .choice");

const botChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const game = (playerChoice) => {
    console.log("player choice =", playerChoice);
    const botSelection = botChoice();
    console.log("bot choice =", botSelection);
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.className.match(/rock|paper|scissors/)[0];
        game(playerChoice);
    });
});