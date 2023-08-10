// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract BlockFin is ERC20Capped {
    address payable owner = payable(msg.sender);

    constructor(
        uint256 cap
    ) ERC20("BlockFin", "BFN") ERC20Capped(cap * (10 ** decimals())) {
        _mint(owner, 10000 * (10 ** decimals()));
    }

    function giveReward(address _account, uint256 _amount) public {
        _mint(_account, _amount);
    }
}
