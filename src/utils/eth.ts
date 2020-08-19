import { getAddress, isAddress as isEthAddress } from '@ethersproject/address';

export const MAX_ETH_ADDRESS = 23384026197294446691258957323460528314494920687615;

export function randomEthereumAddress(): string {
  return `0x${Math.floor(Math.random()*MAX_ETH_ADDRESS).toString(16)}`;
}

export function isEthereumAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

function shortenString(str: string, chars: number): string {
  return `${str.slice(0, chars + 2)}...${str.slice(-(chars+1), -1)}`;
}

export function shortenEthereumAddress(address: string, chars = 4): string {
  const parsed = isEthereumAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return shortenString(parsed, chars);
}

export function shortenAddress(address: string, chars = 4): string {
  if (isEthAddress(address)) {
    return shortenEthereumAddress(address, chars);
  }
  return shortenString(address, chars);
}