import React from 'react'
import { DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components'

import {
  Board,
  Calculator,
  DragDropWrapper,
  SelectionBar,
  Switcher,
} from 'src/components'
import { selectKit, setItems, useAppDispatch, useAppSelector } from 'src/store'
import { TBox } from 'src/types'

const Header = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: flex-end;
`
const Wrap1 = styled.div`
  display: flex;
  justify-content: center;
  gap: 56px;
`

const Inner = styled.div`
  box-sizing: content-box;
  width: 243px;
  height: 448px;
`
const Wrap = styled.div`
  display: grid;
  border: 2px dashed ${({ theme }) => theme.white500};
  border-radius: 6px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

function App() {
  const { kit } = useAppSelector(selectKit)
  const dispatch = useAppDispatch()

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result
    if (!destination) return
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return
    const start = source.droppableId
    const end = destination.droppableId

    if (start === end) {
    }
    const boxType = draggableId as TBox
    const isMovingInCanvas = source.droppableId === 'calculator'

    if (!kit.includes(boxType)) {
      const newItems = [...kit]

      if (isMovingInCanvas) newItems.splice(source.index, 1)
      newItems.splice(destination.index, 0, boxType)
      dispatch(setItems(newItems))
    }
  }

  return (
    <Board>
      <Header>
        <Switcher />
      </Header>
      <Wrap1>
        <DragDropWrapper onDragEnd={onDragEnd}>
          <Inner>
            <SelectionBar />
          </Inner>
          <Inner>
            <Wrap>
              <Calculator />
            </Wrap>
          </Inner>
        </DragDropWrapper>
      </Wrap1>
    </Board>
  )
}

export default App
