const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function (deployer) {
  deployer.deploy(ERC721PresetMinterPauserAutoId, "Dummy Run","dummy", "https://my-json-server.typicode.com/waynemarler/getmeta/tokens/");
};

