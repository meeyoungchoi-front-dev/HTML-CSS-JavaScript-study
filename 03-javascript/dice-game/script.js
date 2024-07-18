let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

document.getElementById('roll').addEventListener('click', function() {
    let dice = Math.floor(Math.random() * 6) + 1;
    
    if (dice <= 2) {
        currentScore = 0;
        switchPlayer();
    } else {
        currentScore += dice;
    }
    
    document.getElementById(`score${activePlayer + 1}`).textContent = currentScore;
});

document.getElementById('hold').addEventListener('click', function() {
    scores[activePlayer] += currentScore;
    
    if (scores[activePlayer] >= 50) {
        alert(`Player ${activePlayer + 1} wins!`);
    } else {
        currentScore = 0;
        switchPlayer();
    }
});

function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
}