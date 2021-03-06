/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface PancakeswapInterface extends utils.Interface {
  functions: {
    "pancakeswapRouter()": FunctionFragment;
    "swappingETHForExactTokens(uint256,address,address)": FunctionFragment;
    "testMe()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "pancakeswapRouter"
      | "swappingETHForExactTokens"
      | "testMe"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "pancakeswapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swappingETHForExactTokens",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "testMe", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "pancakeswapRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swappingETHForExactTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testMe", data: BytesLike): Result;

  events: {};
}

export interface Pancakeswap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PancakeswapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    pancakeswapRouter(overrides?: CallOverrides): Promise<[string]>;

    swappingETHForExactTokens(
      amountOut: BigNumberish,
      tokenOut: string,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    testMe(overrides?: CallOverrides): Promise<[string]>;
  };

  pancakeswapRouter(overrides?: CallOverrides): Promise<string>;

  swappingETHForExactTokens(
    amountOut: BigNumberish,
    tokenOut: string,
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  testMe(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    pancakeswapRouter(overrides?: CallOverrides): Promise<string>;

    swappingETHForExactTokens(
      amountOut: BigNumberish,
      tokenOut: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    testMe(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    pancakeswapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    swappingETHForExactTokens(
      amountOut: BigNumberish,
      tokenOut: string,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    testMe(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    pancakeswapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swappingETHForExactTokens(
      amountOut: BigNumberish,
      tokenOut: string,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testMe(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
