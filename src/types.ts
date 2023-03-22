import { baseKit } from './constants'

export enum SIZE {
  medium = 'medium',
  exMedium = 'exMedium',
  big = 'big',
  small = 'small',
}
export type UiSize = keyof typeof SIZE
export type TBox = keyof typeof baseKit
export enum TYPE {
  constructor = 'constructor',
  runtime = 'runtime',
}
export type UIType = keyof typeof TYPE
export type InitKitType = {
  [key in keyof typeof baseKit]: () => JSX.Element
}
