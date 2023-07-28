const SimpleStorage = artifacts.require("SimpleStorage");
const MetaCoin = artifacts.require("ConvertLib");
const ConvertLib = artifacts.require("MetaCoin");
const MyNFT = artifacts.require("MyNFT");


module.exports = function (deployer) {
  deployer.deploy(MyNFT);
  deployer.deploy(SimpleStorage);
  deployer.deploy(MetaCoin);
  deployer.link(ConvertLib, MetaCoin, MyNFT);
  deployer.deploy(ConvertLib);
};
