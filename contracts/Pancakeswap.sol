//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.6;

import "@theanthill/pancake-swap-periphery/contracts/interfaces/IPancakeRouter01.sol";
import "@theanthill/pancake-swap-periphery/contracts/interfaces/IERC20.sol";

contract Pancakeswap {
  address internal constant PANCAKESWAP_ROUTER_ADDRESS = 0x10ED43C718714eb63d5aA57B78B54704E256024E;
  address internal constant PANCAKE_FACTORY_ADDRESS = 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73;

  address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

  IPancakeRouter01 public pancakeswapRouter;
  uint256 public deadline = block.timestamp + 2 minutes;

  constructor() public {
    pancakeswapRouter = IPancakeRouter01(PANCAKESWAP_ROUTER_ADDRESS);
  }

  function getPath(address arg0, address arg1) public pure returns (address[] memory) {
    address[] memory path = new address[](2);
    path[0] = arg0;
    path[1] = arg1;
    return path;
  }

  function swappingETHForExactTokens(uint256 amountOut, address tokenOut) external returns (uint256[] memory) {
    uint256[] memory swappedAmounts = pancakeswapRouter.swapETHForExactTokens(
      amountOut,
      getPath(pancakeswapRouter.WETH(), tokenOut),
      msg.sender,
      deadline
    );
    return swappedAmounts;
  }

  function swappingExactEthForTokens(uint256 amountOutMin, address tokenOut) external returns (uint256[] memory){
    uint256[] memory swappedTokens = pancakeswapRouter.swapExactETHForTokens(
      amountOutMin, 
      getPath(pancakeswapRouter.WETH(), tokenOut), 
      msg.sender, 
      deadline
    );
    return swappedTokens;
  }

  function swappingExactTokensForEth(uint256 amountIn, uint256 amountOutMin, address tokenIn) external returns (uint256[] memory){
    IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
    uint256[] memory swappedETH = pancakeswapRouter.swapExactTokensForETH(
      amountIn, 
      amountOutMin, 
      getPath(tokenIn, pancakeswapRouter.WETH()), 
      msg.sender, 
      deadline
    );
    IERC20(tokenIn).approve(PANCAKESWAP_ROUTER_ADDRESS, amountIn);
    return swappedETH;
  }

  function swappingExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address tokenIn, address tokenOut) external returns (uint[] memory){
    IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
    IERC20(tokenIn).approve(PANCAKESWAP_ROUTER_ADDRESS, amountIn);
    uint256[] memory swappedTokens = pancakeswapRouter.swapExactTokensForTokens(
      amountIn, 
      amountOutMin, 
      getPath(tokenIn, tokenOut), 
      address(this),
      deadline
    );
    return swappedTokens;
  }

  function swappingTokensForExactTokens(uint256 amountOut, uint256 amountInMax, address tokenIn, address tokenOut) external returns (uint[] memory){
    IERC20(tokenIn).transferFrom(msg.sender, address(this),amountInMax);
    IERC20(tokenIn).approve(PANCAKESWAP_ROUTER_ADDRESS, amountInMax);
    uint256[] memory swappedTokens = pancakeswapRouter.swapTokensForExactTokens(
      amountOut, 
      amountInMax, 
      getPath(tokenIn, tokenOut), 
      address(this), 
      deadline
    );
    return swappedTokens;
  }

  function swappingTokensForExactETH(uint256 amountOut, uint256 amountInMax, address tokenIn) external returns (uint[] memory){
    IERC20(tokenIn).transferFrom(msg.sender, address(this),amountInMax);
    IERC20(tokenIn).approve(PANCAKESWAP_ROUTER_ADDRESS, amountInMax);
    uint256[] memory swappedETHs = pancakeswapRouter.swapTokensForExactETH(
      amountOut, 
      amountInMax, 
      getPath(tokenIn, pancakeswapRouter.WETH()), 
      address(this), 
      deadline
    );
    return swappedETHs;
  }
}
