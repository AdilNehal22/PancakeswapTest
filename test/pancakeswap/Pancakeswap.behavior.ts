import { artifacts } from "hardhat";
import type { Artifact } from "hardhat/types";
const { expect } = require("chai");
const { network, waffle, ethers } = require("hardhat");
const { deployContract } = waffle;
const provider = waffle.provider;
const Web3 = require("web3");
const {
  defaultAbiCoder,
  hexlify,
  keccak256,
  toUtf8Bytes,
  solidityPack,
  parseUnits,
  AbiCoder,
  parseEther,
  mnemonicToEntropy,
} = require("ethers/lib/utils");
const { Console, count } = require("console");
const { BigNumber, BigNumberish, Signer, constants, Wallet } = require("ethers");
const { SignerWithAddress } = require("@nomiclabs/hardhat-ethers/signers");
var Eth = require("web3-eth");
var RLP = require("rlp");
var bn = require("bignumber.js");
const { connect } = require("http2");
const hre = require("hardhat");
const { ecsign } = require("ethereumjs-util");
const assert = require("assert");
const { Contract, ContractFactory } = require("@ethersproject/contracts");
const { AbiItem } = require("web3-utils");
const { monitorEventLoopDelay } = require("perf_hooks");
let abiCoder = new AbiCoder();
var web3 = new Web3(provider);

export function shouldBehaveLikePancakeswap(): void {
  const AMOUNT_OUT = 1;
  const AMOUNT_IN = 100;
  const WHALE = process.env.WETH_WHALE;
  const DAI = process.env.DAI;
  const WBTC = process.env.WBTC;
  const CAKE = process.env.CAKE
  const BTCB = process.env.BTCB
  const expectedSwapAmount = "557227237267357629";
  const TOKEN_OUT = BTCB;

  let TestPancakeswap;
  let pancakeswap: any
  let receiver: { address: any };
  let other;

  beforeEach(async()=>{
    TestPancakeswap = await ethers.getContractFactory("Pancakeswap");
    pancakeswap = await TestPancakeswap.deploy();
  });

  it("should swap eth for exact tokens", async function () {
    const amounts = await pancakeswap.swappingETHForExactTokens(AMOUNT_OUT, TOKEN_OUT);
    console.log(`amounts of token received ${amounts}`);
  });

  it("should swap exact eth for tokens", async function(){
    const amountsOfTokens = await pancakeswap.swappingExactEthForTokens(AMOUNT_OUT, TOKEN_OUT);
    console.log(`amounts of token received ${amountsOfTokens}`);
  });

  
}
// yarn test --network hardhat
