import { IconProps } from '/components'
import _, { isString } from 'lodash'

export interface CustomPlatform extends IconProps {
  reverse?: PlatformDefiniton;
}

export type KnownPlatform = 'eth' | 'algo';

export type PlatformDefiniton = KnownPlatform | CustomPlatform;

export interface PlatformProps {} 

export const getIconName = (platform: PlatformDefiniton): string => _.get({eth: 'Eth', algo: 'Algo'}, platform as KnownPlatform, (platform as CustomPlatform).name)

export const getIconBackgroundColor = (platform: PlatformDefiniton): IconProps['color'] => _.get({eth: 'brand', algo: 'accent'}, platform as KnownPlatform, (platform as CustomPlatform).color)

export const getSize = (platform: PlatformDefiniton): IconProps['size'] => !isString(platform) ? platform.size : undefined

export const getReverse = (platform: PlatformDefiniton): PlatformDefiniton | undefined => _.get({eth: 'algo', algo: 'eth'} as const, platform as KnownPlatform, (platform as CustomPlatform).reverse)