const MyNFT = artifacts.require('MyNFT');

contract('MyNFT', (accounts) => {
  let myNFT;

  before(async () => {
    myNFT = await MyNFT.deployed();
  });
  console.log(contract)

  it('should mint a character NFT', async () => {
    const tokenId = await myNFT.tokenCounter();
    await myNFT.mintCharacter(accounts[0], "ipfsHashForCharacter");
    const owner = await myNFT.idToOwner(tokenId);
    assert.equal(owner, accounts[0], "Character NFT not minted correctly");
  });

  it('should mint a planet NFT', async () => {
    const tokenId = await myNFT.tokenCounter();
    await myNFT.mintPlanet(accounts[1], "ipfsHashForPlanet");
    const owner = await myNFT.idToOwner(tokenId);
    assert.equal(owner, accounts[1], "Planet NFT not minted correctly");
  });

  it('should transfer an NFT', async () => {
    const tokenId = await myNFT.tokenCounter();
    await myNFT.mintCharacter(accounts[0], "ipfsHashForCharacter");
    await myNFT.transfer(accounts[1], tokenId, { from: accounts[0] });
    const newOwner = await myNFT.idToOwner(tokenId);
    assert.equal(newOwner, accounts[1], "Transfer not successful");
  });
});
