let btn = document.querySelectorAll(".main-Btn");
let resetBtn = document.querySelector(".reset-Btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector(".new-Btn");
let score = document.querySelector(".score");

let turnO = true //playerO, playerX;

const winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
    btnCount = 0;
}

const enableBtn = () => {
    btn.forEach((btns) => {
        btns.disabled = false;
        btns.innerText = "";
    })
}
const disableBtn = () => {
    btn.forEach((btns) => {
        btns.disabled = true;
    })
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    btnCount = 0;
    disableBtn();
}

const btnOnOff = () => {
    msg.innerText = `The game is a draw! Do you want to play a new game? 😊`
    msgContainer.classList.remove("hide");
    btnCount = 0; 
}

let btnCount = 0;
btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnO){
            btn.style.color = "purple";
            btn.innerText = "O";
            turnO = false;
        }
        else{
            btn.style.color = "blue";
            btn.innerText = "X";
            turnO = true;
        };
        btn.disabled = true;
        btnCount++;
        console.log(btnCount)
        if(btnCount == 9){
            btnOnOff();
        }
        checkWinner();
    });
}) 

const checkWinner = () => {
    winPatterns.forEach((pattern) => {
        let pos1Val = btn[pattern[0]].innerText;
        let pos2Val = btn[pattern[1]].innerText;
        let pos3Val = btn[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    })
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);