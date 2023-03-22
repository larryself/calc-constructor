import { ComponentPropsWithoutRef } from 'react'
import React from 'react'
import styled, { css } from 'styled-components'
import { switchProp } from 'styled-tools'

import { colors } from 'src/theme'
import { UiSize } from 'src/types'

interface StyledButton {
  size: UiSize
  color: string
}
interface Props extends ComponentPropsWithoutRef<'button'> {
  content: number | string
  color?: string
  size: UiSize
  onClick: () => void
}

const Box = styled.button<StyledButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.baseWhite};
  border: 1px solid ${({ theme }) => theme.white100};
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  &:hover {
    border: 2px solid ${({ theme }) => theme.iris100};
    cursor: default;
    background-color: initial;
    color: initial;
  }

  &:active {
    background: ${({ theme }) => theme.iris100};
    color: ${({ theme }) => theme.white};
  }

  ${switchProp('size', {
    big: css`
      width: 232px;
      height: 64px;
      background: ${({ theme }) => theme.iris100};
      color: ${({ theme }) => theme.baseWhite};
    `,
    medium: css`
      width: 72px;
      height: 48px;
    `,
    exMedium: css`
      width: 152px;
      height: 48px;
    `,
    small: css`
      width: 52px;
      height: 48px;
    `,
  })}
`

export const Button = ({
  content,
  color = colors.baseWhite,
  size,
  onClick,
  ...props
}: Props) => {
  return (
    <Box size={size} color={color} type={'button'} onClick={onClick} {...props}>
      {content}
    </Box>
  )
}
