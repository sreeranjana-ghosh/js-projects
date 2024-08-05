console.log("Welcome to Tic Tac Toe")
let turn = "X"
let gameOver = false
let count = 0
let win = false

//Function to change turn
const changeTurn = () => {
    count++;
    return turn === "X" ? "O" : "X"
}

// Function to Check win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('box-text');
    let wins = [
        [0, 1, 2, 5, 7, 0],
        [3, 4, 5, 5, 17, 0],
        [6, 7, 8, 5, 27, 0],
        [0, 3, 6, -5, 17, 90],
        [1, 4, 7, 5, 17, 90],
        [2, 5, 8, 15, 17, 90],
        [0, 4, 8, 5, 17.5, 45],
        [2, 4, 6, 5, 17, 135],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[1]].innerText !== '') && count < 10) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won 🥳"
            gameOver = true
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '150px';
            document.getElementById('container').style.pointerEvents = 'none';
            win = true
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
        if (!win && count == 9) {
            document.querySelector('.info').innerText = "game draw"
            gameOver = true
        }
    })
})



restart.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    count = 0;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    gameOver = false
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '0px'
    document.getElementById('container').style.pointerEvents = 'auto';
})