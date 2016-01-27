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
});
