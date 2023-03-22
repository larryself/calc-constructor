import React from 'react'
import styled from 'styled-components'

import { DraggableWrapper, DroppableWrapper } from 'src/components'
import { baseKit } from 'src/constants'
import { selectKit, useAppSelector } from 'src/store'

const Inner = styled.div<{ inactive: boolean }>`
  ${({ inactive }) => inactive && 'opacity: .5'}
`

export const SelectionBar = () => {
  const { kit, mode, initKit } = useAppSelector(selectKit)

  if (mode === 'runtime') {
    return null
  }

  return (
    <DroppableWrapper
      droppableId={'kit'}
      isDropDisabled={true}
      isPlaceholderDisabled={true}
    >
      {initKit.map((type, index) => {
        const inactive = kit.includes(type)
        const Item = baseKit[type]

        return (
          <DraggableWrapper
            key={type}
            draggableId={inactive ? type + '-inactive' : type}
            index={index}
            isDragDisabled={inactive}
          >
            <Inner inactive={inactive}>
              <Item />
            </Inner>
          </DraggableWrapper>
        )
      })}
    </DroppableWrapper>
  )
}
