import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";

import type { Pancakeswap } from "../src/types/contracts/Pancakeswap";
import type { Greeter } from "../src/types/contracts/Greeter";

declare module "mocha" {
  export interface Context {
    pancakeswap: Pancakeswap;
    greeter: Greeter;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}




// declare module "mocha" {
//   export interface Context {
//     loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
//     signers: Signers;
//   }
// }

// export interface Signers {
//   admin: SignerWithAddress;
// }