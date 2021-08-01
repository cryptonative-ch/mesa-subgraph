/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ParticipantList,
  ParticipantListInterface,
} from "../ParticipantList";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amounts",
        type: "uint256",
      },
    ],
    name: "AmountsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "managers",
        type: "address[]",
      },
    ],
    name: "ListInitialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "managers",
        type: "address[]",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isInList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "listManagers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "participantAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "setParticipantAmounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610645806100206000396000f3fe608060405234801561001057600080fd5b50600436106100615760003560e01c8062f2a33814610066578063158ef93e1461009e578063597ba1cb146100ba578063a33f4a3f146100e0578063c6044c4614610209578063fa33bcf3146102ac575b600080fd5b61008c6004803603602081101561007c57600080fd5b50356001600160a01b03166102d2565b60408051918252519081900360200190f35b6100a66102e4565b604080519115158252519081900360200190f35b6100a6600480360360208110156100d057600080fd5b50356001600160a01b03166102ed565b610207600480360360408110156100f657600080fd5b81019060208101813564010000000081111561011157600080fd5b82018360208201111561012357600080fd5b8035906020019184602083028401116401000000008311171561014557600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561019557600080fd5b8201836020820111156101a757600080fd5b803590602001918460208302840111640100000000831117156101c957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610302945050505050565b005b6102076004803603602081101561021f57600080fd5b81019060208101813564010000000081111561023a57600080fd5b82018360208201111561024c57600080fd5b8035906020019184602083028401116401000000008311171561026e57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061045a945050505050565b6100a6600480360360208110156102c257600080fd5b50356001600160a01b03166105ce565b60016020526000908152604090205481565b60005460ff1681565b60026020526000908152604090205460ff1681565b3360009081526002602052604090205460ff16610366576040805162461bcd60e51b815260206004820152601a60248201527f5061727469636970616e744c6973743a20464f5242494444454e000000000000604482015290519081900360640190fd5b80518251146103bc576040805162461bcd60e51b815260206004820152601f60248201527f5061727469636970616e744c6973743a20494e56414c49445f4c454e47544800604482015290519081900360640190fd5b60005b82518110156104555760008382815181106103d657fe5b6020026020010151905060008383815181106103ee57fe5b6020908102919091018101516001600160a01b0384166000818152600184526040908190208390558051838152905192945090927fcf867fcf1a6489767a1862f902876e256149ea0c26627c9b843673ad23f3baa192918290030190a250506001016103bf565b505050565b60005460ff161561049c5760405162461bcd60e51b81526004018080602001828103825260248152602001806105ec6024913960400191505060405180910390fd5b60008151116104f2576040805162461bcd60e51b815260206004820152601c60248201527f5061727469636970616e744c6973743a204e4f5f4d414e414745525300000000604482015290519081900360640190fd5b6000805460ff191660011781555b81518110156105555760016002600084848151811061051b57fe5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055600101610500565b507f736b4011e57e4f45501c3efcf0eba7ccd14c15164ab518a88fdf15a272bcd1f0816040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105b85781810151838201526020016105a0565b505050509050019250505060405180910390a150565b6001600160a01b031660009081526001602052604090205415159056fe5061727469636970616e744c6973743a20414c52454144595f494e495449414c495a4544a26469706673582212209de692438078681d34152cb99a403018461cf7f4071bcb0156f761c1639b147a64736f6c634300060c0033";

export class ParticipantList__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ParticipantList> {
    return super.deploy(overrides || {}) as Promise<ParticipantList>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ParticipantList {
    return super.attach(address) as ParticipantList;
  }
  connect(signer: Signer): ParticipantList__factory {
    return super.connect(signer) as ParticipantList__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ParticipantListInterface {
    return new utils.Interface(_abi) as ParticipantListInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ParticipantList {
    return new Contract(address, _abi, signerOrProvider) as ParticipantList;
  }
}
