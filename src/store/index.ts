import { configureStore } from '@reduxjs/toolkit'

import calculatorReducer from './calculator'
import kitReducer from './kit'

const rootReducer = {
  calculator: calculatorReducer,
  kit: kitReducer,
}
export const store = configureStore({
  reducer: rootReducer,
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export * from './hooks'
export * from './kit'
export * from './calculator'
