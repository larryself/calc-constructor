import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

import type { RootStateType } from '../index'

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
