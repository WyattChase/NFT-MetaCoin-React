const SimpleStorage = artifacts.require("SimpleStorage");
const MyNFT = artifacts.require("MyNFT");


module.exports = function (deployer) {
  deployer.deploy(MyNFT);
  deployer.deploy(SimpleStorage);
};
