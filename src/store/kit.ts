import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TBox, TYPE, UIType } from 'src/types'

import { RootStateType } from './index'

interface State {
  initKit: TBox[]
  kit: TBox[]
  mode: UIType
}

const initialState: State = {
  initKit: ['display', 'result', 'numberPanel', 'operatorsPanel'],
  kit: [],
  mode: TYPE.constructor,
}
export const selectKit = (state: RootStateType) => state.kit
const kit = createSlice({
  name: 'kit',
  initialState,
  reducers: {
    toggleMode: (state: State, action: PayloadAction<UIType>) => {
      state.mode = action.payload
    },
    setItems: (state: State, action: PayloadAction<TBox[]>) => {
      state.kit = action.payload
    },
    removeItem: (state: State, action: PayloadAction<TBox>) => {
      const removedItem = action.payload
      const removedItemIndex = state.kit.indexOf(removedItem)
      state.kit.splice(removedItemIndex, 1)
    },
  },
})
export const { removeItem, setItems, toggleMode } = kit.actions
export default kit.reducer
