export const MAX_ETH_ADDRESS = 23384026197294446691258957323460528314494920687615;

export function randomEthereumAddress(): string {
  return `0x${Math.floor(Math.random()*MAX_ETH_ADDRESS).toString(16)}`;
}