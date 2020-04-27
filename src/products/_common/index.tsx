import React from 'react'
import { ColorPalette, ColorType } from 'models/color'

interface IProps {
  background?: ColorType
}

export const Background: React.FC<IProps> = ({ children, background = ColorPalette.White.WHITE }) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background
      }}
    >
      {children}
    </div>
  )
}
