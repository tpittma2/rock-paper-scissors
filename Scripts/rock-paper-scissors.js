/* 
* Chooses a random number between 1-2 and uses that to return 'Rock', 'Paper', or 'Scissors'
*/
function computerPlay()
{
    let val = Math.floor(Math.random() * 3);
    if(val === 0)
        return "Rock";
    else if(val === 1)
        return "Paper";
    else
        return "Scissors";
}

function playRound(playerSelection, computerSelection)
{
    let result;
    computerSelection = computerSelection.toLowerCase();
    switch(playerSelection.toLowerCase())
    {
        case 'rock':
            if(computerSelection == 'rock')
            {
                result = `Tie Game! You both chose Rock`;
            }
            else if(computerSelection == 'paper')
            {
                result = `You Lose! Paper beats Rock`
            }
            else if(computerSelection == 'scissors')
            {
                result = 'You Win! Rock beats Scissors';
            }
            else
            {
                throw Error('Invalid computer response.');
            }
        break;
        case 'paper':
            if(computerSelection == 'rock')
            {
                result = `You Win! Paper beats Rock`;
            }
            else if(computerSelection == 'paper')
            {
                result = `Tie Game! You both chose Paper`
            }
            else if(computerSelection == 'scissors')
            {
                result = 'You Lose! Scissors beats Paper';
            }
            else
            {
                throw Error('Invalid computer response.');
            }
        break;
        case 'scissors':
            if(computerSelection == 'rock')
            {
                result = `You Lose! Rock beats Paper`;
            }
            else if(computerSelection == 'paper')
            {
                result = `You Win! Scissors beats Paper`
            }
            else if(computerSelection == 'scissors')
            {
                result = 'Tie Game! You both chose Scissors';
            }
            else
            {
                throw Error('Invalid computer response.');
            }
        break;
        default:
            throw Error('Invalid player input.');
        break;
        
    }
    return result;
}

function game(numRounds = 5)
{
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < numRounds; i++)
    {
        let playerInput = prompt(`Enter 'Rock', 'Paper', or 'Scissors'.`);
        result = playRound(playerInput, computerPlay());
        
        if(result.startsWith('You Win!'))
        {
            playerScore++;
        }
        else if(result.startsWith('You Lose!'))
        {
            computerScore++;
        }
        console.log(`${result} (Current Score: ${playerScore} to ${computerScore})`);
    }

    let finalScoreText;
    if(playerScore > computerScore)
        finalScoreText = 'You Win!';
    else if(computerScore > playerScore)
        finalScoreText = 'You Lose!';
    else
        finalScoreText = 'Tie Game!';
    console.log();
    console.log(`${finalScoreText} (Final Score: ${playerScore} to ${computerScore})`);



}

game();