import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootStateType } from './index'

interface State {
  prevOperand: string | null
  currentOperand: string | null
  result: string | null
  operator: string | null
}

const initialState: State = {
  prevOperand: null,
  currentOperand: null,
  operator: null,
  result: null,
}
export const selectCalculator = (state: RootStateType) => state.calculator

const calculator = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setOperator(state, action: PayloadAction<string>) {
      if (!state.prevOperand && !state.currentOperand) {
        state.currentOperand = '0'
      } else if (!state.currentOperand && state.prevOperand) {
        state.operator = action.payload
      } else {
        state.prevOperand = state.currentOperand
        state.currentOperand = null
        state.operator = action.payload
      }
    },
    setValue: (state, action: PayloadAction<string>) => {
      const operandValue = state.currentOperand
      const value = action.payload === ',' ? '.' : action.payload

      if (operandValue === '0' && value !== '.') {
        state.currentOperand = '0.' + value
      } else if (operandValue && operandValue.includes('.') && value === '.') {
        return
      } else if (state.operator) {
        state.currentOperand =
          state.currentOperand !== null ? state.currentOperand + value : value
      } else {
        if (value === '.' && !operandValue) {
          state.currentOperand += value
        } else {
          state.currentOperand =
            state.currentOperand !== null ? state.currentOperand + value : value
        }
      }
    },
    result: (state) => {
      if (!state.prevOperand || !state.currentOperand) {
        return
      }

      if (state.operator === '+') {
        state.prevOperand = `${+state.prevOperand + +state.currentOperand}`
      }

      if (state.operator === '-') {
        state.prevOperand = `${+state.prevOperand - +state.currentOperand}`
      }

      if (state.operator === 'x') {
        state.prevOperand = `${+state.prevOperand * +state.currentOperand}`
      }

      if (state.operator === '/') {
        state.prevOperand = `${+state.prevOperand / +state.currentOperand}`
      }

      state.currentOperand = null
      state.operator = null
    },
  },
})
export const { setValue, setOperator, result } = calculator.actions

export default calculator.reducer
