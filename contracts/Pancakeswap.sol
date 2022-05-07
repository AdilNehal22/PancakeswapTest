//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "@theanthill/pancake-swap-periphery/contracts/interfaces/IPancakeRouter01.sol";
import "@theanthill/pancake-swap-periphery/contracts/interfaces/IERC20.sol";

contract Pancakeswap {
    address internal constant PANCAKESWAP_ROUTER_ADDRESS = 0x10ED43C718714eb63d5aA57B78B54704E256024E;
    address internal constant PANCAKE_FACTORY_ADDRESS = 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73;

    address internal constant BTCB = 0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c;
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address private constant WBNB = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;

    IPancakeRouter01 public pancakeswapRouter;

    constructor() {
        pancakeswapRouter = IPancakeRouter01(PANCAKESWAP_ROUTER_ADDRESS);
    }

    // function getPath(address arg0, address arg1) public pure returns (address[] memory) {
    //   address[] memory path = new address[](2);
    //   path[0] = arg0;
    //   path[1] = arg1;
    //   return path;
    // }

    function swappingETHForExactTokens(uint256 amountOut, address tokenOut) external returns (uint256[] memory) {
        address[] memory path = new address[](2);
        path[0] = WBNB;
        path[1] = tokenOut;
        uint256 deadline = block.timestamp + 15;
        uint256[] memory swappedAmounts = pancakeswapRouter.swapETHForExactTokens(
            amountOut,
            path,
            msg.sender,
            deadline
        );
        return swappedAmounts;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
