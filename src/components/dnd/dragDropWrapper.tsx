import React from 'react'
import { ReactNode } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

interface Props {
  onDragEnd: (result: DropResult) => void
  children: ReactNode
}

export const DragDropWrapper = ({ children, onDragEnd }: Props) => {
  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
}
