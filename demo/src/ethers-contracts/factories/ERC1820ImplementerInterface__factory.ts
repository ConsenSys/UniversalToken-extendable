/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC1820ImplementerInterface,
  ERC1820ImplementerInterfaceInterface,
} from "../ERC1820ImplementerInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "canImplementInterfaceForAddress",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ERC1820ImplementerInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ERC1820ImplementerInterfaceInterface {
    return new utils.Interface(_abi) as ERC1820ImplementerInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1820ImplementerInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1820ImplementerInterface;
  }
}
