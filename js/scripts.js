function Player(name) {
  this.name = name;
  this.score = 0;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.activePlayer = player1;
  this.activePlayerScore = 0;
  this.dieRollResult = 0;
}

  Game.prototype.dieRoll = function() {
    var result =  Math.floor( Math.random() * 6 ) + 1;
    this.activePlayerScore += result;
    return this.dieRollResult = result;
  }
