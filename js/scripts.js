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
    if (result === 1) {
      this.turnChange();
    } else {
      this.activePlayerScore += result;
    }
    return this.dieRollResult = result;
}

  Game.prototype.turnChange = function() {
    console.log("turnChange");
    if (this.activePlayer === this.player1) {
        this.activePlayer = this.player2;
    } else {
        this.activePlayer = this.player1;
    }
    this.activePlayerScore = 0;
  }

  Game.prototype.hold = function() {
    if (this.activePlayer === this.player1) {
      this.player1.score += this.activePlayerScore;
      this.activePlayer = this.player2;
    }
    else {
      this.player2.score += this.activePlayerScore;
      this.activePlayer = this.player1;
    }

    this.activePlayerScore = 0;

  };

$(document).ready(function() {
  $("#startGame").click(function(event) {
    var player1 = $("input#player1").val();
    var player2 = $("input#player2").val();
        // $("input#btn1").attr("value", "70");
    // console.log(player2);
    $("div#landing-page").hide();
    $("div#game-play").show();

      // $("ul#player2namelabel").append("<li>Please insert yourself!</li>");

      event.preventDefault();
    });
  });
