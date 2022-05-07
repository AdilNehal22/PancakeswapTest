import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { Pancakeswap } from "../../src/types/contracts/Pancakeswap";
import { Signers } from "../types";
import { shouldBehaveLikePancakeswap } from "./Pancakeswap.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Pancakeswap", function () {
    beforeEach(async function () {
      //const greeting: string = "Hello, world!";
      const pancakeswapArtifact: Artifact = await artifacts.readArtifact("Pancakeswap");
      this.pancakeswap = <Pancakeswap>await waffle.deployContract(this.signers.admin, pancakeswapArtifact);
    });
    shouldBehaveLikePancakeswap();
  });
});
