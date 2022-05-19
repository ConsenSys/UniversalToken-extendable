pragma solidity ^0.8.0;

import {ERC20Proxy} from "./tokens/proxy/ERC20/ERC20Proxy.sol";
import {RolesBase} from "./utils/roles/RolesBase.sol";

contract ERC20 is ERC20Proxy {
    uint256 public initalSupply;

    constructor(
        string memory name_,
        string memory symbol_,
        bool allowMint,
        bool allowBurn,
        address owner,
        uint256 _initalSupply,
        uint256 maxSupply,
        address logicAddress
    )
        ERC20Proxy(
            name_,
            symbol_,
            allowMint,
            allowBurn,
            maxSupply,
            owner,
            logicAddress
        )
    {
        initalSupply = _initalSupply;

        if (owner != _msgSender()) {
            //Temporaroly add minter role to msg.sender
            //If the sender is not the final owner
            RolesBase._addRole(_msgSender(), TOKEN_MINTER_ROLE);
        }

        ERC20Proxy._mint(owner, initalSupply);

        if (owner != _msgSender()) {
            //Remove after mint is complete
            //If the sender is not the final owner
            RolesBase._removeRole(_msgSender(), TOKEN_MINTER_ROLE);
        }
    }
}
