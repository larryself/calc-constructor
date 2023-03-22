import React from 'react'
import { SVGProps } from 'react'
import { useTheme } from 'styled-components'

interface Props extends SVGProps<SVGSVGElement> {
  isActive: boolean
}

export const Selectors = ({ isActive, ...props }: Props) => {
  const { iris100, grey } = useTheme()
  const color = isActive ? iris100 : grey

  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 13.33 4.17 10 7.5 6.67m5 0L15.83 10l-3.33 3.33"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
