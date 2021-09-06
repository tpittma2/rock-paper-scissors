const playerBtnRock = document.querySelector('.player-btn-rock');
const playerBtnPaper = document.querySelector('.player-btn-paper');
const playerBtnScissors = document.querySelector('.player-btn-scissors');
const playerScoreText = document.querySelector('.player-score');

const computerBtnRock = document.querySelector('.computer-btn-rock');
const computerBtnPaper = document.querySelector('.computer-btn-paper');
const computerBtnScissors = document.querySelector('.computer-btn-scissors');
const computerScoreText = document.querySelector('.computer-score');

const roundLog = document.querySelector('.round-log');

const resultContainer = document.querySelector('.result-container');
const playAgainBtn = document.querySelector('.play-again-button')
const txtResultText = document.querySelector('.result-text');

const HIDDEN_CLASS = 'hidden';

/* 
* Chooses a random number between 1-2 and uses that to return 'Rock', 'Paper', or 'Scissors'
*/
function computerPlay() {
    let val = Math.floor(Math.random() * 3);
    if (val === 0)
        return "Rock";
    else if (val === 1)
        return "Paper";
    else
        return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let result;
    computerSelection = computerSelection.toLowerCase();
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection == 'rock') {
                result = `Tie Game! You both chose Rock`;
            }
            else if (computerSelection == 'paper') {
                result = `You Lose! Paper beats Rock`
            }
            else if (computerSelection == 'scissors') {
                result = 'You Win! Rock beats Scissors';
            }
            else {
                throw Error('Invalid computer response.');
            }
            break;
        case 'paper':
            if (computerSelection == 'rock') {
                result = `You Win! Paper beats Rock`;
            }
            else if (computerSelection == 'paper') {
                result = `Tie Game! You both chose Paper`
            }
            else if (computerSelection == 'scissors') {
                result = 'You Lose! Scissors beats Paper';
            }
            else {
                throw Error('Invalid computer response.');
            }
            break;
        case 'scissors':
            if (computerSelection == 'rock') {
                result = `You Lose! Rock beats Paper`;
            }
            else if (computerSelection == 'paper') {
                result = `You Win! Scissors beats Paper`
            }
            else if (computerSelection == 'scissors') {
                result = 'Tie Game! You both chose Scissors';
            }
            else {
                throw Error('Invalid computer response.');
            }
            break;
        default:
            throw Error('Invalid player input.');
            break;

    }
    return result;
}

function isGameOver() {
    return !resultContainer.classList.contains(HIDDEN_CLASS)
}

function setGameOver(resultText) {
    txtResultText.textContent = resultText;
    resultContainer.classList.remove(HIDDEN_CLASS);
    let className = 'clickable-button';
    playerBtnRock.classList.remove(className);
    playerBtnPaper.classList.remove(className);
    playerBtnScissors.classList.remove(className);
    setActiveButtons();

}

function game(playerSelection) {
    if (isGameOver())
        return;

    let computerSelection = computerPlay();
    let playerScore = parseInt(playerScoreText.textContent);
    let computerScore = parseInt(computerScoreText.textContent);
    setActiveButtons(playerSelection, computerSelection);

    let result = playRound(playerSelection, computerSelection);

    if (result.startsWith('You Win!')) {
        playerScore++;
        playerScoreText.textContent = playerScore;
    }
    else if (result.startsWith('You Lose!')) {
        computerScore++;
        computerScoreText.textContent = computerScore;
    }

    addLog(result);
    //console.log(`${result} (Current Score: ${playerScore} to ${computerScore})`);
    if (playerScore == 5 || computerScore == 5) {
        let finalScoreText;
        if (playerScore > computerScore)
            finalScoreText = 'You Win!';
        else if (computerScore > playerScore)
            finalScoreText = 'You Lose.';
        else
            finalScoreText = 'Tie Game!';
        setGameOver(finalScoreText);


    }
    // console.log();
    // console.log(`${finalScoreText} (Final Score: ${playerScore} to ${computerScore})`);
}

function addLog(logText) {
    let roundNumber = roundLog.childNodes.length;
    const listItem = document.createElement('li');
    listItem.textContent = `Round ${roundNumber}: ${logText}`;
    roundLog.insertBefore(listItem, roundLog.firstChild);
}

function setActiveButtons(playerSelection, computerSelection) {
    let className = 'active-button';
    playerBtnRock.classList.remove(className);
    playerBtnPaper.classList.remove(className);
    playerBtnScissors.classList.remove(className);
    computerBtnRock.classList.remove(className);
    computerBtnPaper.classList.remove(className);
    computerBtnScissors.classList.remove(className);

    let playerSelectedButton;
    let computerSelectedButton;
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            playerSelectedButton = playerBtnRock;
            break;
        case 'paper':
            playerSelectedButton = playerBtnPaper;
            break;
        case 'scissors':
            playerSelectedButton = playerBtnScissors;
            break;
    }

    switch (computerSelection.toLowerCase()) {
        case 'rock':
            computerSelectedButton = computerBtnRock;
            break;
        case 'paper':
            computerSelectedButton = computerBtnPaper;
            break;
        case 'scissors':
            computerSelectedButton = computerBtnScissors;
            break;
    }

    if(playerSelectedButton != undefined)
        playerSelectedButton.classList.toggle(className);
    if(computerSelectedButton != undefined)
        computerSelectedButton.classList.toggle(className);

}

function InitControls() {

    playAgainBtn.onclick = () => window.location.reload();

    playerBtnRock.addEventListener('click', function (e) {
        game(e.currentTarget.dataset.button);
    });
    playerBtnPaper.addEventListener('click', function (e) { game(e.currentTarget.dataset.button); });
    playerBtnScissors.addEventListener('click', function (e) { game(e.currentTarget.dataset.button); });

}
InitControls();
//clearActiveButtons();

//game();