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
    expect(player1.name).to.equal("Bill");
    expect(player2.name).to.equal("Tom");
  });

  it("sets player1 as the active player", function() {
    new Game("Bill", "Tom");
    expect(Game.activePlayer).to.equal(Game.player1);
  });

  it("sets scores for player1 and player2 to zero", function() {
    new Game("Bill", "Tom");
    expect(player1.score).to.equal(0);
    expect(player2.score).to.equal(0);
  });

});
