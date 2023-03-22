import React from 'react'
import { MouseEvent } from 'react'

import { DraggableWrapper, DroppableWrapper } from 'src/components'
import { baseKit } from 'src/constants'
import {
  removeItem,
  selectKit,
  useAppDispatch,
  useAppSelector,
} from 'src/store'
import { TBox } from 'src/types'

export const Calculator = ({}) => {
  const { kit } = useAppSelector(selectKit)
  const dispatch = useAppDispatch()

  const handleDClick = (e: MouseEvent<HTMLDivElement>) => {
    const itemName = (e.target as HTMLElement).dataset?.rbdDraggableId
    if (!itemName) return
    dispatch(removeItem(itemName as TBox))
  }

  return (
    <DroppableWrapper droppableId={'calculator'}>
      <div onDoubleClick={handleDClick}>
        {kit.map((boxType, index: number) => {
          const Box = baseKit[boxType]

          return (
            <DraggableWrapper key={boxType} draggableId={boxType} index={index}>
              <Box key={boxType} />
            </DraggableWrapper>
          )
        })}
      </div>
    </DroppableWrapper>
  )
}
