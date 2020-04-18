import React from 'react'
import classNames from 'classnames'

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
  BOTTOM_RIGHT = 33
}

interface IProps {
  children: React.ReactNode
  className?: string
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

  if (verticalNumber === 1) vertical = 'flex-start'
  else if (verticalNumber === 3) vertical = 'flex-end'

  return [ horizontal, vertical ]
}

const ShiftArr = (targetArr: [number, number?, number?, number?]): [number, number, number, number] => {
  let resultArr: [number, number, number, number] = [targetArr[0], targetArr[0], targetArr[0], targetArr[0]]

  const CountNull = targetArr.reduce<number>((acc, curr) => { if (!!curr) return acc + 1;  return acc }, 0)

  if (CountNull === 2) {
    targetArr[1] && (resultArr = [targetArr[0], targetArr[1], targetArr[0], targetArr[1]])
  } else if (CountNull === 3) {
    (targetArr[1] && targetArr[2]) && (resultArr = [targetArr[0], targetArr[1], targetArr[2], targetArr[1]])
  } else if (!targetArr[3]) {
    (targetArr[1] && targetArr[2] && targetArr[3]) && (resultArr = [targetArr[0], targetArr[1], targetArr[2], targetArr[3]])
  }
  
  return resultArr
}

const Block: React.FC<IProps> = ({ children, className, direction = Direction.ROW, sort = Sort.CENTER_CENTER, margin = [0], padding = [0] }) => {
  const classProps = classNames(styles.default, className)

  const [ horizontal, vertical ] = CalculateSort(sort)

  const justifyContent = direction === Direction.ROW ? horizontal : vertical
  const alignItems = direction === Direction.ROW ? vertical : horizontal

  const styleProps = { justifyContent, alignItems, margin: ShiftArr(margin).toString(), padding: ShiftArr(padding).toString() }

  return (
    <div className={classProps} style={styleProps}>
      {children}
    </div>
  )
}

export default Block
