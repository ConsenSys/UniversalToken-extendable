/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAllowlistedAdminRole,
  IAllowlistedAdminRoleInterface,
} from "../IAllowlistedAdminRole";

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
    ],
    name: "AllowlistedAdminAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AllowlistedAdminRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isAllowlistedAdmin",
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
    name: "addAllowlistedAdmin",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "removeAllowlistedAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAllowlistedAdminRole__factory {
  static readonly abi = _abi;
  static createInterface(): IAllowlistedAdminRoleInterface {
    return new utils.Interface(_abi) as IAllowlistedAdminRoleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAllowlistedAdminRole {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAllowlistedAdminRole;
  }
}