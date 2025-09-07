let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

let btns = ["yellow","green","purple","red"];

document.addEventListener("keypress",function(){   // Press any key to start the game
    if(started == false){
        console.log("Game Started!")
        started = true;
    }

    levelUp();
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 90);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // we want a random btn to flash for that let's create an array and apply random no. concept on the indexes of that array(btns)
    let btnIdx = Math.floor(Math.random()*3);
    let btnColor = btns[btnIdx];
    let randomBtn = document.querySelector(`.${btnColor}`);

    gameSeq.push(btnColor);
    console.log(gameSeq);
    btnFlash(randomBtn);
}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to restart the game`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white"
        },150);
        gameReset();
    }
}

function btnPress(){
    let btn = this;
    console.log(btn);
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function gameReset(){
    started = false;
    gameSeq = [];
    userSeq = [];

    level = 0;
}