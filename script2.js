let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX,player0


//number of all correct patterns.if that happens then particular player would be win.
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//RESET BUTTON KO FUNCTION KARWANA HAMARE GAME ME JAISE CLICK KARE USI TIME RESET HO JAAYE.
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
//in this section the game played code is executed....
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){ //if the turn of player0
            box.innerText="O";
            turn0 = false;
        }
        else{ //if the turn of playerX
             box.innerText="X";
            turn0 = true;
        }
        box.disabled= true;

        //check the winner...by making  a function inside the box.
        checkWinner();
     });

});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText= "";
    }
};

//for showing the winner of the game..
const showWinner = (winner) => {
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes()
};

// now we call the checkWinner function outside the box and check all winPatterns one by one..

const checkWinner = () => {
    for( let pattern of winPatterns){
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;

      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
      }

    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

