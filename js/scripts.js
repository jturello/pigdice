function Player(name) {
  this.name = name;
  this.score = 0;
}

Player.prototype.incrementScore = function(turnScore) {
  this.score += turnScore;
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

  Game.prototype.hold = function() {
    if (this.activePlayer === this.player1) {
      this.player1.score += this.activePlayerScore;
      this.activePlayer = this.player2;
    }
    else {
      this.player1.score += this.activePlayerScore;
      this.activePlayer = this.player1;
    }

  };
