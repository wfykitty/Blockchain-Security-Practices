pragma solidity ^0.6.0;

contract tipJar{
    address private owner;
    
    constructor() public{
        owner = msg.sender;
        
    }
    function addTip() external payable{
    }
    
    function withdraw() public {
        require(msg.sender == owner, "only allows the owner to withdraw tips");
        uint256 totalAmount = address(this).balance;
        msg.sender.transfer(totalAmount);
    }
    
}