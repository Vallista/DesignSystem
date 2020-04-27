import React from 'react'
import classNames from 'classnames'

export enum Coordinate {
  TOP_LEFT = 11,
  TOP_CENTER,
  TOP_RIGHT,
  CENTER_LEFT = 21,
  CENTER_CENTER,
  CENTER_RIGHT,
  BOTTOM_LEFT = 31,
  BOTTOM_CENTER,
  BOTTOM_RIGHT
}

interface IProps {
  coordinate?: Coordinate
  distance?: {
    x: number
    y: number
  }
}

const CalculateBox = (coordinate: Coordinate, distance: { x: number; y: number }): string[] => {
  const x = coordinate % 10
  const y = Math.floor(coordinate / 10)

  let X = 'left'
  let Y = 'top'

  if (x === 3) X = 'right'
  if (y === 3) Y = 'bottom'

  return [ X, Y, x === 2 ? '50%' : `${distance.x}px`, y === 2 ? '50%' : `${distance.y}px` ]
}

const FixedLayer: React.FC<IProps> = ({ coordinate = Coordinate.CENTER_CENTER, distance = { x: 0, y: 0 } }) => {
  const [ dirX, dirY, x, y ] = CalculateBox(coordinate, distance)
  const combineBox = { [dirX]: x, [dirY]: y }

  const classProps = classNames()
  const styleProps = coordinate / 2 === 0 ? { ...combineBox, transform: 'translate(-50%, -50%)' } : combineBox

  return (
    <div className={classProps} style={styleProps}>
      123
    </div>
  )
}

export default FixedLayer
