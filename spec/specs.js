describe('Player', function() {
  it("allows users to pick a player", function() {
    var testPlayer = new Player("Bill");
    expect(testPlayer.name).to.equal("Bill");
  });

});
