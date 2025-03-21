let gameSeq = [];
let userSeq = [];

let btns = ["yellow" ,"red", "purple", "blue", "red"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let btn = document.querySelector(".btn")

let startBtn = document.querySelector(".start-btn");

checkWindowSize();

function checkWindowSize(){
    if(window.innerWidth < 610){
        h3.innerText = `Click Start to start the Game`;
    }
    else if(window.innerWidth > 610) {
        hiddenStartBtn();
    }
}

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Stared");
        started = true;

        levelUp();
    }
})

startBtn.addEventListener("click", function(){
    if(started == false){
        console.log("Game Stared");
        started = true;

        hiddenStartBtn();
        console.log("Button Start");
        levelUp();
    }
})

// Function Relate to Start Button When Window Width less than 600  
function hiddenStartBtn(){
    if(startBtn.classList.contains('visible')){
        startBtn.classList.remove('visible');   
    }
    startBtn.classList.add('hidden');
}

function displayStartBtn(){
    startBtn.classList.add('visible');
}


// Functions For the Game
function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 400);
}

function levelUp(){
    userSeq = [];

    level++;
    h3.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * 4);
    let randColor = btns[randIndex];
    let randbtn = document.querySelector(`.${randColor}`)

    gameSeq.push(randColor);
    console.log("Game Seq: " + gameSeq);

    gameFlash(randbtn);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        if(window.innerWidth < 610){
            h3.innerHTML = `<h2>Game Over!! Your Score <b>${level}<b> <br> Press Start to restart</h2>`;
            displayStartBtn();
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                    document.querySelector("body").style.backgroundColor = "rgb(5, 52, 100)";
                }, 400
            );
            reset();
        }
        else if(window.innerWidth > 610) {
            h3.innerHTML = `<h2>Game Over!! Your Score <b>${level}<b> <br> Press any key to restart</h2>`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                    document.querySelector("body").style.backgroundColor = "rgb(5, 52, 100)";
                }, 400
            );
            reset();
        }
    }
}

function btnPress(){
    let btn = this;

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    userFlash(btn);
    // console.log("User Seq: " + userSeq);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

/* <a href="https://github.com/abhisek2004">@ Created and Design By Abhisek Panda</a> */
/* <a href="https://www.linkedin.com/in/abhisekpanda2004/">@ Created and Design By Abhisek Panda</a> */