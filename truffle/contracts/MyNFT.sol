// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;
import "@openzeppelin/contracts/utils/Strings.sol";


contract MyNFT {
    event Mint(address indexed _to, uint256 indexed _tokenId, bytes32 _ipfsHash);
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    string[6] colors = ["blue", "red", "green", "yellow", "white", "black"];
    

    uint256 tokenCounter = 1;
    mapping(uint256 => address) internal idToOwner;
    mapping(uint256 => string) internal idToEyeColor;
    mapping(uint256 => string) internal idToUrL;
    mapping(uint256 => string) internal idToHairColor;


    function mintCharacter(address _to, bytes32 _ipfsHash) public {
        uint256 _tokenId = tokenCounter;
        idToEyeColor[_tokenId] = colors[random(0, 5)];
        idToHairColor[_tokenId] = colors[random(0, 5)];
        idToUrL[_tokenId] = "https://github.com/WyattChase/star-wars-guide/blob/master/app/assets/images/" + Strings.toString(_tokenId) + ".jpg?raw=true";
        idToOwner[_tokenId] = _to;
        tokenCounter++;
        emit Mint(_to, _tokenId, _ipfsHash);
    }
    
    function mintPlanet(address _to, bytes32 _ipfsHash) public {
        uint256 _tokenId = tokenCounter;
        idToEyeColor[_tokenId] = colors[random(0, 5)];
        idToUrL[_tokenId] = "https://github.com/WyattChase/star-wars-guide/blob/master/app/assets/images/" + Strings.toString(_tokenId) + ".jpg?raw=true";
        idToOwner[_tokenId] = _to;
        tokenCounter++;
        emit Mint(_to, _tokenId, _ipfsHash);
    }


    function transfer(address _to, uint256 _tokenId) public {
        require(msg.sender == idToOwner[_tokenId]);
        idToOwner[_tokenId] = _to;
        emit Transfer(msg.sender, _to, _tokenId);
    }

    function random(uint maxNumber,uint minNumber) public view returns (uint amount) {
        amount = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, block.number))) % (maxNumber-minNumber);
        amount = amount + minNumber;
        return amount;
    } 
}