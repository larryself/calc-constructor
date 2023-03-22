import React from 'react'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

import { Eye, Selectors } from 'src/components'
import {
  selectKit,
  toggleMode,
  useAppDispatch,
  useAppSelector,
} from 'src/store'

const Box = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 6px;
  display: flex;
`
const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  padding: 8px 12px;
  border-radius: 6px;
  ${ifProp(
    'isActive',
    css`
      background: ${({ theme }) => theme.baseWhite};
      border: 1px solid ${({ theme }) => theme.white100};
      border-radius: 5px;
    `,
    ``,
  )}
`

export const Switcher = () => {
  const { mode } = useAppSelector(selectKit)
  const dispatch = useAppDispatch()

  return (
    <Box>
      <Button
        type={'button'}
        isActive={mode === 'runtime'}
        onClick={() => dispatch(toggleMode('runtime'))}
      >
        <Eye isActive={mode === 'runtime'} />
        Runtime
      </Button>
      <Button
        type={'button'}
        isActive={mode === 'constructor'}
        onClick={() => dispatch(toggleMode('constructor'))}
      >
        <Selectors isActive={mode === 'constructor'} />
        Constructor
      </Button>
    </Box>
  )
}
