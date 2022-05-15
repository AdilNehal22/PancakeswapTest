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
  Overrides,
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
    "deadline()": FunctionFragment;
    "getPath(address,address)": FunctionFragment;
    "pancakeswapRouter()": FunctionFragment;
    "swappingETHForExactTokens(uint256,address)": FunctionFragment;
    "swappingExactEthForTokens(uint256,address)": FunctionFragment;
    "swappingExactTokensForEth(uint256,uint256,address)": FunctionFragment;
    "swappingExactTokensForTokens(uint256,uint256,address,address)": FunctionFragment;
    "swappingTokensForExactETH(uint256,uint256,address)": FunctionFragment;
    "swappingTokensForExactTokens(uint256,uint256,address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deadline"
      | "getPath"
      | "pancakeswapRouter"
      | "swappingETHForExactTokens"
      | "swappingExactEthForTokens"
      | "swappingExactTokensForEth"
      | "swappingExactTokensForTokens"
      | "swappingTokensForExactETH"
      | "swappingTokensForExactTokens"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "deadline", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPath",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pancakeswapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swappingETHForExactTokens",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swappingExactEthForTokens",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swappingExactTokensForEth",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swappingExactTokensForTokens",
    values: [BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swappingTokensForExactETH",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swappingTokensForExactTokens",
    values: [BigNumberish, BigNumberish, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "deadline", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPath", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pancakeswapRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swappingETHForExactTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swappingExactEthForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swappingExactTokensForEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swappingExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swappingTokensForExactETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swappingTokensForExactTokens",
    data: BytesLike
  ): Result;

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
    deadline(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPath(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    pancakeswapRouter(overrides?: CallOverrides): Promise<[string]>;

    swappingETHForExactTokens(
      amountOut: BigNumberish,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swappingExactEthForTokens(
      amountOutMin: BigNumberish,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swappingExactTokensForEth(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenIn: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swappingExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swappingTokensForExactETH(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      tokenIn: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swappingTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deadline(overrides?: CallOverrides): Promise<BigNumber>;

  getPath(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  pancakeswapRouter(overrides?: CallOverrides): Promise<string>;

  swappingETHForExactTokens(
    amountOut: BigNumberish,
    tokenOut: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swappingExactEthForTokens(
    amountOutMin: BigNumberish,
    tokenOut: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swappingExactTokensForEth(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    tokenIn: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swappingExactTokensForTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    tokenIn: string,
    tokenOut: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swappingTokensForExactETH(
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    tokenIn: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swappingTokensForExactTokens(
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    tokenIn: string,
    tokenOut: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deadline(overrides?: CallOverrides): Promise<BigNumber>;

    getPath(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    pancakeswapRouter(overrides?: CallOverrides): Promise<string>;

    swappingETHForExactTokens(
      amountOut: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swappingExactEthForTokens(
      amountOutMin: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swappingExactTokensForEth(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenIn: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swappingExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swappingTokensForExactETH(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      tokenIn: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swappingTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    deadline(overrides?: CallOverrides): Promise<BigNumber>;

    getPath(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pancakeswapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    swappingETHForExactTokens(
      amountOut: BigNumberish,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swappingExactEthForTokens(
      amountOutMin: BigNumberish,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swappingExactTokensForEth(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenIn: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swappingExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swappingTokensForExactETH(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      tokenIn: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swappingTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPath(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pancakeswapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swappingETHForExactTokens(
      amountOut: BigNumberish,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swappingExactEthForTokens(
      amountOutMin: BigNumberish,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swappingExactTokensForEth(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenIn: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swappingExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swappingTokensForExactETH(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      tokenIn: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swappingTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
