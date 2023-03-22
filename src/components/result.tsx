import React from 'react'

import { Button, Wrapper } from 'src/components'
import { result, useAppDispatch } from 'src/store'

export const Result = () => {
  const dispatch = useAppDispatch()

  return (
    <Wrapper>
      <Button
        content={'='}
        color={''}
        size={'big'}
        onClick={() => dispatch(result())}
      />
    </Wrapper>
  )
}
