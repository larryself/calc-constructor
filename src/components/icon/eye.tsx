import React from 'react'
import { SVGProps } from 'react'
import { useTheme } from 'styled-components'

interface Props extends SVGProps<SVGSVGElement> {
  isActive: boolean
}

export const Eye = ({ isActive, ...props }: Props) => {
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
        d="M11.77 11.77a2.5 2.5 0 1 0-3.54-3.54 2.5 2.5 0 0 0 3.54 3.54Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.05 10a8.34 8.34 0 0 1 15.9 0 8.34 8.34 0 0 1-15.9 0Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
