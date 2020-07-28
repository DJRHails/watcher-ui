import { getAddress } from '@ethersproject/address';

export const MAX_ETH_ADDRESS = 23384026197294446691258957323460528314494920687615;

export function randomEthereumAddress(): string {
  return `0x${Math.floor(Math.random()*MAX_ETH_ADDRESS).toString(16)}`;
}

export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${parsed.slice(0, chars + 2)}...${parsed.slice(-(chars+1), -1)}`;
}