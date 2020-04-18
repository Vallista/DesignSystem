import React from 'react'
import classNames from 'classnames'

import { IComponentProps } from '../../../models/common'
import { CalculateBox } from '../../../utils'

import styles from './style.module.scss'

export enum Direction {
  ROW = 'row',
  COLUMN = 'column',
  ROW_REVERSE = 'row-reverse',
  COLUMN_REVERSE = 'column-reverse'
}

export enum Sort {
  TOP_LEFT = 11,
  TOP_CENTER = 12,
  TOP_RIGHT = 13,
  CENTER_LEFT = 21,
  CENTER_CENTER = 22,
  CENTER_RIGHT = 23,
  BOTTOM_LEFT = 31,
  BOTTOM_CENTER = 32,
  BOTTOM_RIGHT = 33,
  SPACE_BETWEEN = 40,
  SPACE_AROUND = 50,
}

interface IProps extends IComponentProps {
  children: React.ReactNode
  direction?: Direction
  sort?: Sort
  margin?: [number, number?, number?, number?]
  padding?: [number, number?, number?, number?]
}

const CalculateSort = (sort: Sort): string[] => {
  const horizontalNumber = sort % 10
  const verticalNumber = sort / 10

  let horizontal = 'center'
  let vertical = 'center'

  if (horizontalNumber === 1) horizontal = 'flex-start'
  else if (horizontalNumber === 3) horizontal = 'flex-end'
  else if (horizontalNumber === 4) horizontal = 'space-between'
  else if (horizontalNumber === 5) horizontal = 'space-around'

  if (verticalNumber === 1) vertical = 'flex-start'
  else if (verticalNumber === 3) vertical = 'flex-end'

  return [ horizontal, vertical ]
}


const Block: React.FC<IProps> = ({ children, className, direction = Direction.ROW, sort = Sort.CENTER_CENTER, margin = [0], padding = [0] }) => {
  const classProps = classNames(styles.default, className)

  const [ horizontal, vertical ] = CalculateSort(sort)

  const justifyContent = direction === Direction.ROW ? horizontal : vertical
  const alignItems = direction === Direction.ROW ? vertical : horizontal

  const styleProps = { justifyContent, alignItems, margin: CalculateBox(margin).toString(), padding: CalculateBox(padding).toString() }

  return (
    <div className={classProps} style={styleProps}>
      {children}
    </div>
  )
}

export default Block
