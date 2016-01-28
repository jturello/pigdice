describe('Player', function() {
  it("allows users to pick a player", function() {
    var testPlayer = new Player("Bill");
    expect(testPlayer.name).to.equal("Bill");
  });
});

describe('Game', function() {
  it("creates player 1 and player 2", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var game = new Game(player1, player2);
    expect(game.player1.name).to.equal("Bill");
    expect(game.player2.name).to.equal("Tom");
  });

  it("sets player1 as the active player", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var game = new Game(player1, player2);
    expect(game.activePlayer).to.equal(player1);

  });

  it("sets scores for player1 and player2 to zero", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var game = new Game(player1, player2);
    expect(game.player1.score).to.equal(0);
    expect(game.player2.score).to.equal(0);
  });

  it("initializes activePlayerScore to zero", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    expect(testGame.activePlayerScore).to.equal(0);
  });
});


describe('dieRoll', function() {
  it("rolls the die and displays a random number 1 through 6", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    expect(testGame.dieRoll()).to.be.within(1, 6);
  });

  it("shows that dieRollResult will equal each dieRoll", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    expect(testGame.dieRoll()).to.equal(testGame.dieRollResult);
  });

  it("increments activePlayerScore by the amount rolled", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    testGame.dieRoll();
    testGame.dieRoll();
    testGame.dieRoll();
    testGame.dieRoll();
    testGame.dieRoll();
    testGame.dieRoll();
    testGame.dieRoll();
    expect(testGame.activePlayerScore).to.above(6);
  });

  it("will toggle player when one is rolled", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    //testGame.dieRollResult = 1;
    testGame.dieRoll();
    expect(testGame.activePlayer).to.equal(testGame.player2);;
  });

  it("set activePlayerScore to zero when one is rolled", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    expect(testGame.activePlayerScore).to.equal(0);
  });


});


describe('hold', function() {
  it("will toggle activePlayer when hold is selected", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    testGame.dieRoll();
    testGame.dieRoll();
    testGame.hold()
    expect(testGame.activePlayer).to.equal(testGame.player2);
  });

  it("will add activePlayerScore value to individual player's score value", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    var turnScore = 0;
    testGame.dieRoll();
    testGame.dieRoll();
    var activeScore = testGame.activePlayerScore;
    testGame.hold()
    expect(player1.score).to.equal(activeScore);
  });

  it("re-initializes activePlayerScore to 0 for the next player's turn", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    testGame.dieRoll();
    testGame.dieRoll();
    testGame.hold()
    expect(testGame.activePlayerScore).to.equal(0);
  });


});
