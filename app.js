const maxScore = document.querySelector('#max--score');
const textPanel = document.querySelector('#text--panel');
const leftText = document.querySelector("#left--input--text");
const scoreAlert = document.querySelector('#alert');
const btnPanel = document.querySelector('#btn--panel');

const playerOne = {
    score: 0,
    button: document.querySelector('#btn--p1'),
    display: document.querySelector('#st--score')
}

const playerTwo = {
    score: 0,
    button: document.querySelector('#btn--p2'),
    display: document.querySelector('#nd--score')
}

const reset = document.querySelector('#btn--rst')

let gameOver = false;

const changePoints = (first, second) => {
    
    if(maxScore.value == '') {
        cssWhenPlaceholderEmpty();
    } else {
        
        if(!gameOver) {
            first.score++;
            updateScore(first);
        }

        if(first.score >= maxScore.value) {

            setPlayerScoreColor(first, '#0DA338');
            setPlayerScoreColor(second, '#D60E0A');

            displayResetAlert();

            gameOver = true;
        }
    }
};

const resetPoints = () => {
    playerOne.score = 0;
    playerTwo.score = 0;

    updateScore(playerOne);
    updateScore(playerTwo);

    setPlayerScoreColor(playerOne, 'whitesmoke');
    setPlayerScoreColor(playerTwo, 'whitesmoke');

    closeDisplayResetAlert();
    
    gameOver = false;
}

const cssWhenPlaceholderEmpty = () => {
    leftText.classList.add('text--animation');
    setTimeout(() => leftText.classList.remove('text--animation'), 400);
}
const updateScore = (player) => player.display.innerText = player.score;
const setPlayerScoreColor = (player, color) => player.display.style.color = color;

const displayResetAlert = () => {
    scoreAlert.style.display = 'inline';
    textPanel.style.paddingBottom = `calc(3rem - ${scoreAlert.offsetHeight}px)`;
}
const closeDisplayResetAlert = () => {
    scoreAlert.style.display = 'none';
    textPanel.style.paddingBottom = '3rem';
}

playerOne.button.addEventListener('click', () => changePoints(playerOne, playerTwo));
playerTwo.button.addEventListener('click', () => changePoints(playerTwo, playerOne));
reset.addEventListener('click', () => resetPoints(playerOne, playerTwo));


