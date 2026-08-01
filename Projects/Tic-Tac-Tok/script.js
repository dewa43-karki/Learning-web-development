let boxes = Array.from(document.querySelectorAll(".box"));
let newbutton = document.querySelector("#newGame");
let winnerOverlay = document.querySelector(".winn");
let winnerMessage = document.querySelector("#winner");
let resetButton = document.querySelector(".reset button");

let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGames = () => {
    turnX = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    winnerOverlay.classList.add("hide");
    winnerMessage.innerHTML = "";
};

const showResult = (message) => {
    winnerMessage.innerHTML = `<b><em>${message}</em></b>`;
    winnerOverlay.classList.remove("hide");
};

const getMessage = (winner) => {
    return `WELL, I hate to break it to you DADDY ${winner}!<br>But YOU loseee and I wooonnn!!!`;
};

const wincheck = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showResult(getMessage(pos1Val));
                return;
            }
        }
    }

    if (boxes.every((box) => box.innerText !== "")) {
        showResult(getMessage("O"));
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;
        box.innerText = turnX ? "X" : "O";
        if (turnX){
            box.style.color ="pink";
        }else{
            box.style.color ="black";
        }
        turnX = !turnX;
        box.disabled = true;
        wincheck();
    });
});

newbutton.addEventListener("click", resetGames);
resetButton.addEventListener("click", resetGames);