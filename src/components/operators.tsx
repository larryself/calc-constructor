import React from 'react'

import { Button, Wrapper } from 'src/components'
import { baseOperators } from 'src/constants'
import { setOperator } from 'src/store/calculator'
import { useAppDispatch } from 'src/store/hooks'
import { SIZE } from 'src/types'

export const Operators = () => {
  const dispatch = useAppDispatch()

  return (
    <Wrapper>
      {baseOperators.map((operator) => (
        <Button
          key={operator}
          content={operator}
          size={SIZE.small}
          onClick={() => dispatch(setOperator(operator))}
        />
      ))}
    </Wrapper>
  )
}
