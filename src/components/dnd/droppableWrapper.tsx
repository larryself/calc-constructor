import React from 'react'
import { ReactNode } from 'react'
import { Droppable, DroppableProvided } from 'react-beautiful-dnd'
import styled from 'styled-components'

interface Props {
  droppableId: string
  isDropDisabled?: boolean
  isPlaceholderDisabled?: boolean
  children: ReactNode
}

const Wrap = styled.div<{ isActive: boolean }>``

export const DroppableWrapper = ({
  droppableId,
  isDropDisabled,
  isPlaceholderDisabled,
  children,
}: Props) => {
  return (
    <Droppable droppableId={droppableId} isDropDisabled={isDropDisabled}>
      {(provided: DroppableProvided, snapshot) => {
        return (
          <Wrap
            ref={provided.innerRef}
            {...provided.droppableProps}
            isActive={snapshot.isDraggingOver}
          >
            {children}
            {!isPlaceholderDisabled && provided.placeholder}
          </Wrap>
        )
      }}
    </Droppable>
  )
}
