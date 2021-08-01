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
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AquaFactoryInterface extends ethers.utils.Interface {
  functions: {
    "allTemplates(uint256)": FunctionFragment;
    "feeDenominator()": FunctionFragment;
    "feeManager()": FunctionFragment;
    "feeNumerator()": FunctionFragment;
    "feeTo()": FunctionFragment;
    "initialized()": FunctionFragment;
    "launchTemplate(uint256,bytes,string)": FunctionFragment;
    "numberOfTemplates()": FunctionFragment;
    "saleFee()": FunctionFragment;
    "setFeeManager(address)": FunctionFragment;
    "setFeeNumerator(uint256)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setSaleFee(uint256)": FunctionFragment;
    "setTemplateFee(uint256)": FunctionFragment;
    "setTemplateLauncher(address)": FunctionFragment;
    "setTemplateManager(address)": FunctionFragment;
    "templateFee()": FunctionFragment;
    "templateId()": FunctionFragment;
    "templateLauncher()": FunctionFragment;
    "templateManager()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allTemplates",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeDenominator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "launchTemplate",
    values: [BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfTemplates",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "saleFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFeeManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeNumerator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setSaleFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTemplateFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTemplateLauncher",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTemplateManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "templateFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "templateId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "templateLauncher",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "templateManager",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "allTemplates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeDenominator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "launchTemplate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfTemplates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "saleFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSaleFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTemplateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTemplateLauncher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTemplateManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "templateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "templateId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "templateLauncher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "templateManager",
    data: BytesLike
  ): Result;

  events: {
    "FactoryInitialized(address,address,address,uint256,uint256,uint256)": EventFragment;
    "FeeManagerUpdated(address)": EventFragment;
    "FeeNumeratorUpdated(uint256)": EventFragment;
    "FeeToUpdated(address)": EventFragment;
    "SaleFeeUpdated(uint256)": EventFragment;
    "TemplateFeeUpdated(uint256)": EventFragment;
    "TemplateLaunched(address,uint256)": EventFragment;
    "TemplateLauncherUpdated(address)": EventFragment;
    "TemplateManagerUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FactoryInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeManagerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeNumeratorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeToUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleFeeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TemplateFeeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TemplateLaunched"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TemplateLauncherUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TemplateManagerUpdated"): EventFragment;
}

export class AquaFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AquaFactoryInterface;

  functions: {
    allTemplates(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    feeDenominator(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeManager(overrides?: CallOverrides): Promise<[string]>;

    feeNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    launchTemplate(
      _templateId: BigNumberish,
      _data: BytesLike,
      _metaData: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    numberOfTemplates(overrides?: CallOverrides): Promise<[BigNumber]>;

    saleFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    setFeeManager(
      _feeManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSaleFee(
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTemplateFee(
      _templateFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTemplateLauncher(
      _templateLauncher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTemplateManager(
      _templateManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    templateFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    templateId(overrides?: CallOverrides): Promise<[BigNumber]>;

    templateLauncher(overrides?: CallOverrides): Promise<[string]>;

    templateManager(overrides?: CallOverrides): Promise<[string]>;
  };

  allTemplates(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  feeDenominator(overrides?: CallOverrides): Promise<BigNumber>;

  feeManager(overrides?: CallOverrides): Promise<string>;

  feeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  launchTemplate(
    _templateId: BigNumberish,
    _data: BytesLike,
    _metaData: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  numberOfTemplates(overrides?: CallOverrides): Promise<BigNumber>;

  saleFee(overrides?: CallOverrides): Promise<BigNumber>;

  setFeeManager(
    _feeManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeNumerator(
    _feeNumerator: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeTo(
    _feeTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSaleFee(
    _saleFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTemplateFee(
    _templateFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTemplateLauncher(
    _templateLauncher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTemplateManager(
    _templateManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  templateFee(overrides?: CallOverrides): Promise<BigNumber>;

  templateId(overrides?: CallOverrides): Promise<BigNumber>;

  templateLauncher(overrides?: CallOverrides): Promise<string>;

  templateManager(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    allTemplates(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    feeDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    feeManager(overrides?: CallOverrides): Promise<string>;

    feeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    launchTemplate(
      _templateId: BigNumberish,
      _data: BytesLike,
      _metaData: string,
      overrides?: CallOverrides
    ): Promise<string>;

    numberOfTemplates(overrides?: CallOverrides): Promise<BigNumber>;

    saleFee(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeManager(
      _feeManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>;

    setSaleFee(
      _saleFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTemplateFee(
      _templateFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTemplateLauncher(
      _templateLauncher: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTemplateManager(
      _templateManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    templateFee(overrides?: CallOverrides): Promise<BigNumber>;

    templateId(overrides?: CallOverrides): Promise<BigNumber>;

    templateLauncher(overrides?: CallOverrides): Promise<string>;

    templateManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    FactoryInitialized(
      feeManager?: null,
      feeTo?: null,
      templateManager?: null,
      templateFee?: null,
      feeNumerator?: null,
      saleFee?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        feeManager: string;
        feeTo: string;
        templateManager: string;
        templateFee: BigNumber;
        feeNumerator: BigNumber;
        saleFee: BigNumber;
      }
    >;

    FeeManagerUpdated(
      feeManager?: string | null
    ): TypedEventFilter<[string], { feeManager: string }>;

    FeeNumeratorUpdated(
      feeNumerator?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { feeNumerator: BigNumber }>;

    FeeToUpdated(
      feeTo?: string | null
    ): TypedEventFilter<[string], { feeTo: string }>;

    SaleFeeUpdated(
      saleFee?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { saleFee: BigNumber }>;

    TemplateFeeUpdated(
      templateFee?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { templateFee: BigNumber }>;

    TemplateLaunched(
      template?: string | null,
      templateId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { template: string; templateId: BigNumber }
    >;

    TemplateLauncherUpdated(
      templateLauncher?: string | null
    ): TypedEventFilter<[string], { templateLauncher: string }>;

    TemplateManagerUpdated(
      templateManager?: string | null
    ): TypedEventFilter<[string], { templateManager: string }>;
  };

  estimateGas: {
    allTemplates(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    feeManager(overrides?: CallOverrides): Promise<BigNumber>;

    feeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    launchTemplate(
      _templateId: BigNumberish,
      _data: BytesLike,
      _metaData: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    numberOfTemplates(overrides?: CallOverrides): Promise<BigNumber>;

    saleFee(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeManager(
      _feeManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSaleFee(
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTemplateFee(
      _templateFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTemplateLauncher(
      _templateLauncher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTemplateManager(
      _templateManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    templateFee(overrides?: CallOverrides): Promise<BigNumber>;

    templateId(overrides?: CallOverrides): Promise<BigNumber>;

    templateLauncher(overrides?: CallOverrides): Promise<BigNumber>;

    templateManager(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    allTemplates(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeDenominator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeNumerator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    launchTemplate(
      _templateId: BigNumberish,
      _data: BytesLike,
      _metaData: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    numberOfTemplates(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    saleFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeManager(
      _feeManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSaleFee(
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTemplateFee(
      _templateFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTemplateLauncher(
      _templateLauncher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTemplateManager(
      _templateManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    templateFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    templateId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    templateLauncher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    templateManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
