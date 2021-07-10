/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ParticipantListInterface extends ethers.utils.Interface {
  functions: {
    "init(address[])": FunctionFragment;
    "initialized()": FunctionFragment;
    "isInList(address)": FunctionFragment;
    "listManagers(address)": FunctionFragment;
    "participantAmounts(address)": FunctionFragment;
    "setParticipantAmounts(address[],uint256[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "init", values: [string[]]): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isInList", values: [string]): string;
  encodeFunctionData(
    functionFragment: "listManagers",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "participantAmounts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setParticipantAmounts",
    values: [string[], BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isInList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "listManagers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "participantAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setParticipantAmounts",
    data: BytesLike
  ): Result;

  events: {
    "AmountsUpdated(address,uint256)": EventFragment;
    "ListInitialized(address[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AmountsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListInitialized"): EventFragment;
}

export class ParticipantList extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ParticipantListInterface;

  functions: {
    init(
      managers: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "init(address[])"(
      managers: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    "initialized()"(overrides?: CallOverrides): Promise<[boolean]>;

    isInList(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isInList(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    listManagers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "listManagers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    participantAmounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "participantAmounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setParticipantAmounts(
      accounts: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setParticipantAmounts(address[],uint256[])"(
      accounts: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  init(managers: string[], overrides?: Overrides): Promise<ContractTransaction>;

  "init(address[])"(
    managers: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  "initialized()"(overrides?: CallOverrides): Promise<boolean>;

  isInList(account: string, overrides?: CallOverrides): Promise<boolean>;

  "isInList(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  listManagers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "listManagers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  participantAmounts(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "participantAmounts(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setParticipantAmounts(
    accounts: string[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setParticipantAmounts(address[],uint256[])"(
    accounts: string[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    init(managers: string[], overrides?: CallOverrides): Promise<void>;

    "init(address[])"(
      managers: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    "initialized()"(overrides?: CallOverrides): Promise<boolean>;

    isInList(account: string, overrides?: CallOverrides): Promise<boolean>;

    "isInList(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    listManagers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "listManagers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    participantAmounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "participantAmounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setParticipantAmounts(
      accounts: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setParticipantAmounts(address[],uint256[])"(
      accounts: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AmountsUpdated(account: string | null, amounts: null): EventFilter;

    ListInitialized(managers: null): EventFilter;
  };

  estimateGas: {
    init(managers: string[], overrides?: Overrides): Promise<BigNumber>;

    "init(address[])"(
      managers: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    "initialized()"(overrides?: CallOverrides): Promise<BigNumber>;

    isInList(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isInList(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listManagers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "listManagers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    participantAmounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "participantAmounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setParticipantAmounts(
      accounts: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setParticipantAmounts(address[],uint256[])"(
      accounts: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    init(
      managers: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "init(address[])"(
      managers: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "initialized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isInList(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isInList(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listManagers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "listManagers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    participantAmounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "participantAmounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setParticipantAmounts(
      accounts: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setParticipantAmounts(address[],uint256[])"(
      accounts: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
