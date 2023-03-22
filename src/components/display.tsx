import React from 'react'
import styled from 'styled-components'

import { Wrapper } from 'src/components'
import { selectCalculator, useAppSelector } from 'src/store'

export const Inner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 232px;
  height: 52px;
  padding: 4px 8px;
  background: ${({ theme }) => theme.white};
  border-radius: 6px;
`

export const Text = styled.h2`
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
`

export const Display = () => {
  const { prevOperand, currentOperand } = useAppSelector(selectCalculator)
  const number = currentOperand ? currentOperand : prevOperand

  return (
    <Wrapper>
      <Inner>
        <Text>{number ? number : '0'}</Text>
      </Inner>
    </Wrapper>
  )
}
