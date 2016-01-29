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
    event.preventDefault();
    var player1 = new Player($("input#player1").val());
    var player2 = new Player($("input#player2").val());
    $("div#landing-page").hide();
    $("div#game-play").show();
  });

$("#rollDie").click(function(event) {
      event.preventDefault();
      console.log("in rollDie click function");
      // $("button#btn1").text(dieRollResult.toString());

  });

  $("#hold").on("click", function(event) {
    event.preventDefault();
    console.log("in hold click function");
  });

});
