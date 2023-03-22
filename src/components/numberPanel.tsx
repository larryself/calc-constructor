import React from 'react'
import styled from 'styled-components'

import { Button, Wrapper } from 'src/components'
import { baseNumbers } from 'src/constants'
import { setValue, useAppDispatch } from 'src/store'

const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`
const Wrap = styled.div`
  grid-column: 1 / 3;
`

export const NumberPanel = () => {
  const dispatch = useAppDispatch()

  return (
    <Wrapper>
      <Inner>
        {baseNumbers.map((item) => {
          if (item === '0') {
            return (
              <Wrap key={item}>
                <Button
                  content={item}
                  size={'exMedium'}
                  onClick={() => dispatch(setValue(item))}
                />
              </Wrap>
            )
          }

          return (
            <Button
              key={item}
              content={item}
              size={'medium'}
              onClick={() => dispatch(setValue(item))}
            />
          )
        })}
      </Inner>
    </Wrapper>
  )
}
