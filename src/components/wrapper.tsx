import React from 'react'
import styled from 'styled-components'

import { selectKit, useAppSelector } from 'src/store'
import { boxShadow } from 'src/theme'

interface Props {
  children: React.ReactNode
}

export const Box = styled.div<{ isActive: boolean }>`
  display: inline-block;
  padding: 4px;
  background: ${({ theme }) => theme.baseWhite};
  box-shadow: ${boxShadow.baseShadow};
  border-radius: 4px;
  margin-bottom: 12px;

  ${({ isActive }) => isActive && 'pointer-events: none;'}
`
const Inner = styled.div`
  display: flex;
  gap: 8px;
`

export const Wrapper = ({ children }: Props) => {
  const { mode } = useAppSelector(selectKit)
  const isActive = mode === 'constructor'

  return (
    <Box isActive={isActive}>
      <Inner>{children}</Inner>
    </Box>
  )
}
