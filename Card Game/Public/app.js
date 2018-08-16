var allCards = document.getElementsByTagName('img');
var result = document.getElementById('result');
var totalWins = document.getElementById('wins')
var totalLose = document.getElementById('lose')
var countWin = 0;
var countLose = 0;

function guessCard(cardNum){
    var randNum = Math.floor(Math.random()*4);
    if(cardNum === randNum){
        for(var i = 0; i< allCards.length; i++){
            allCards[i].src = 'images/king.png'
            allCards[cardNum].src = "images/black.png"
            result.innerHTML = 'Congrats! You Won'
        }
        winAndLoseCount()
    }
    else{
        for(var j =0; j < allCards.length; j++){
        allCards[j].src = 'images/joker.png'
        allCards[randNum].src = 'images/black.png'
        result.innerHTML = 'Sorry! You Lose'  
        }
        winAndLoseCount()
    }

}

function resetGame(providedEl){
    for(var i = 0; i<allCards.length; i++){
        allCards[i].src = "images/back.png"
        result.innerHTML = ''        
    }
}

function winAndLoseCount(){
    if(result.innerHTML === 'Congrats! You Won'){
        countWin++
        totalWins.innerHTML = "Wins : " + countWin
    }
    else{
        countLose++
        totalLose.innerHTML = "Lose : " + countLose
    }
}
