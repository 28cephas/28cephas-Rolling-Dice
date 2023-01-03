let scores, roundScores, activePlayer, gamePlaying

gamePlaying = true
restart()

document.querySelector('.btn-roll').addEventListener('click', function () {
   if(gamePlaying){
      // 1.Generate Random number
      const dice = Math.floor(Math.random() * 6) + 1

      //  2. Display the result
      const diceImg = document.querySelector('.dice')
      diceImg.style.display = 'block'
      diceImg.src = 'images/dice ' + dice + '.png'

      // 3.Update the round score IF the rolled number is NOT 1
      if(dice !== 1){
         // Add score
         roundScores += dice
         document.querySelector('.current-' + activePlayer).textContent = roundScores

      } else{
         // Next Player
         nextPlayer()
      }
   }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
   if(gamePlaying){
      // Add CURRENT score to GLOBAL score
      scores[activePlayer] += roundScores

      // Update the UI
      document.querySelector('.score-' + activePlayer).textContent = scores[activePlayer]

      // Check if the player won the game
      if(scores[activePlayer] >= 100){
         document.querySelector('.player-' + activePlayer).textContent = 'WINNER!'
         document.querySelector('.player-' + activePlayer).style.color = 'red'
         document.querySelector('.dice').style.display = 'none'
         document.querySelector('main').classList.remove('active1')
         document.querySelector('main').classList.remove('active2')
         gamePlaying = false
      } else {
         nextPlayer()
      }
   }
})

function nextPlayer() {
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
   roundScores = 0
   
   document.querySelector('.current-0').textContent = 0
   document.querySelector('.current-1').textContent = 0

   if(document.querySelector('main').classList.contains('active1')){
      document.querySelector('main').classList.remove('active1')
      document.querySelector('main').classList.add('active2')
   } else {
      document.querySelector('main').classList.remove('active2')
      document.querySelector('main').classList.add('active1')
   }

   document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.restart').addEventListener('click', restart)

function restart() {
   scores = [0, 0]
   roundScores = 0
   activePlayer = 0

   document.querySelector('.score-0').textContent = 0
   document.querySelector('.score-1').textContent = 0
   document.querySelector('.current-0').textContent = 0
   document.querySelector('.current-1').textContent = 0
   document.querySelector('.player-0').textContent = 'PLAYER 1'
   document.querySelector('.player-1').textContent = 'PLAYER 2'
   document.querySelector('.player-0').style.color = 'black'
   document.querySelector('.player-1').style.color = 'black'
   document.querySelector('main').classList.add('active1')
   document.querySelector('main').classList.remove('active2')

   document.querySelector('.dice').style.display = 'none'
   // gamePlaying = true

}