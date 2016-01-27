describe('Player', function() {
  it("allows users to pick a player", function() {
    var testPlayer = new Player("Bill");
    expect(testPlayer.name).to.equal("Bill");
  });

  // it("sets scores for player1 and player2 to zero", function() {
  //   var testPlayer = new Player("Bill");
  //   expect(testPlayer.score).to.equal(0);
  // });

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

  it("sets activePlayerScore to zero", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    expect(testGame.activePlayerScore).to.equal(0);
  });

  it("sets activePlayerScore to zero", function() {
      var player1 = new Player("Bill");
      var player2 = new Player("Tom");
      var testGame = new Game(player1, player2);
      expect(testGame.activePlayerScore).to.equal(0);
    });

  it("rolls the die and displays a random number 1 through 6", function() {
    var player1 = new Player("Bill");
    var player2 = new Player("Tom");
    var testGame = new Game(player1, player2);
    expect(testGame.dieRoll()).to.be.within(1, 6);

  });

});
