import React from 'react'
import { ReactNode } from 'react'
import { Draggable, DraggableProvided } from 'react-beautiful-dnd'

interface Props {
  draggableId: string
  index: number
  isDragDisabled?: boolean
  children: ReactNode
}

export const DraggableWrapper = ({
  draggableId,
  index,
  isDragDisabled,
  children,
}: Props) => {
  return (
    <Draggable
      draggableId={draggableId}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(draggableProvided: DraggableProvided, snapshot) => (
        <>
          <div
            ref={draggableProvided.innerRef}
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
          >
            {children}
          </div>
          {snapshot.isDragging && <div>{children}</div>}
        </>
      )}
    </Draggable>
  )
}
