let btn = document.querySelectorAll(".button-option");
let popupmenu = document.querySelector(".popup");
let newgameBtn =  document.getElementById("new-game");
let restartbtn = document.getElementById("restart");
let msg = document.getElementById("message");
// Winning Pattern Array

let winningPattern = [
    [0,1,2],
[0,3,6],
[2,5,8],
[6,7,8],
[1,4,7],
[ 3,4,5],
[0,4,8],
[2,4,6]
];
// Player M plays first
let mTurn = true;
let count = 0;

//  Disable all buttons
const disableButtons = () => {
    btn.forEach((element) => (element.disabled =true ));

    // enable popup menu
    popupmenu.classList.remove("hide");
};

// enable all buttons (For New Game and Restart)
const enableButtons = () => {
    btn.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    //  Disable Popup Menu

 popupmenu.classList.add("hide");
};

// This function is executed when a player wins
const winFunction = (letter) => {
    disableButtons();
    if(letter=="M") {
msg.innerHTML ="&#x1F389; <br> 'M' Wins";
    }
    else {
        msg.innerHTML ="&#x1F389; <br> 'S' Wins";   
    }
};
const drawFunction = () => {
    disableButtons(); 
    msg.innerHTML ="&#x1F389; <br> It's a draw";   
    
};



// new game

newgameBtn.addEventListener("click" ,()  => {
    count=0;
    enableButtons();
});
// restart button
restartbtn.addEventListener("click" ,()  => {
    count=0;
    enableButtons();
});






// Win logic
const winChecker = () => {
// Loop through all win patterns
for (let i of winningPattern){
let [element1, element2, element3] = [
    btn[i[0]].innerText,
btn[i[1]].innerText,
btn[i[2]].innerText,
];
// Check if elements are filled
//  If 3 empty elemnts are same and would give win as would
if(element1 != "" && element2 != "" && element3 != ""){
    if (element1 == element2  &&  element2 ==  element3) {
        // If all three buttons have same values then pass the values to the  winFunction
        winFunction(element1);
        
    }
}

}
}

// Display M/S on click
btn.forEach((element)  => {
    element.addEventListener("click", () => {
       if (mTurn) {
        mTurn = false;
        // display M
        element.innerText = "M";
        element.disabled = true;
       } else {
        mTurn = true;
        // display S
        element.innerText = "S";
        element.disabled = true;
       }
    //    Increment count on each click
    count += 1;
    if(count== 9) {
drawFunction();
    } 
    // Check for win on every click
    winChecker();

    });
});

// Enable all buttons and popup menu on page load
window.onload=enableButtons();
 
