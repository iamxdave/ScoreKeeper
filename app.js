
const scoreAlert = document.querySelector('#alert');

const textPanel = document.querySelector('#text--panel');
const btnPanel = document.querySelector('#btn--panel');

const scoreLimit = {
    placeholder: document.querySelector('#max--score'),
    leftText: {
        display: document.querySelector("#left--input--text"),
        animationClass: 'text--animation'
    }
}

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
    
    const limit = scoreLimit.placeholder.value;

    if(limit == '') {
        cssWhenPlaceholderEmpty();
    } else {
        
        if(!gameOver) {
            first.score++;
            updateScore(first);
        }

        if(first.score >= limit) {

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

    setTimeout(() => popUpGameStart(400), 200);
}

const popUpGameStart = (time) => {
    if(gameOver){
        const display = scoreLimit.leftText.display;
        const animation = scoreLimit.leftText.animationClass;

        display.classList.add(animation);
        setTimeout(() => display.classList.remove(animation), time);
    }

    gameOver = false;
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


