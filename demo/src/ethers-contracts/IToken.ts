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
  PromiseOrValue,
} from "./common";

export type TransferDataStruct = {
  token: PromiseOrValue<string>;
  payload: PromiseOrValue<BytesLike>;
  partition: PromiseOrValue<BytesLike>;
  operator: PromiseOrValue<string>;
  from: PromiseOrValue<string>;
  to: PromiseOrValue<string>;
  value: PromiseOrValue<BigNumberish>;
  tokenId: PromiseOrValue<BigNumberish>;
  data: PromiseOrValue<BytesLike>;
  operatorData: PromiseOrValue<BytesLike>;
};

export type TransferDataStructOutput = [
  string,
  string,
  string,
  string,
  string,
  string,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  token: string;
  payload: string;
  partition: string;
  operator: string;
  from: string;
  to: string;
  value: BigNumber;
  tokenId: BigNumber;
  data: string;
  operatorData: string;
};

export interface ITokenInterface extends utils.Interface {
  functions: {
    "tokenTransfer((address,bytes,bytes32,address,address,address,uint256,uint256,bytes,bytes))": FunctionFragment;
    "tokenStandard()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "tokenTransfer" | "tokenStandard"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "tokenTransfer",
    values: [TransferDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenStandard",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "tokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenStandard",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITokenInterface;

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
    tokenTransfer(
      transfer: TransferDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * A function to determine what token standard this token implements. This is a pure function, meaning the value should not change
     */
    tokenStandard(overrides?: CallOverrides): Promise<[number]>;
  };

  tokenTransfer(
    transfer: TransferDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * A function to determine what token standard this token implements. This is a pure function, meaning the value should not change
   */
  tokenStandard(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    tokenTransfer(
      transfer: TransferDataStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * A function to determine what token standard this token implements. This is a pure function, meaning the value should not change
     */
    tokenStandard(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    tokenTransfer(
      transfer: TransferDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * A function to determine what token standard this token implements. This is a pure function, meaning the value should not change
     */
    tokenStandard(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    tokenTransfer(
      transfer: TransferDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * A function to determine what token standard this token implements. This is a pure function, meaning the value should not change
     */
    tokenStandard(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
