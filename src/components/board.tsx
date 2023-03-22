import React from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Container = styled.div`
  width: 695px;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.baseWhite};
`

export const Board = ({ children }: Props) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  )
}
