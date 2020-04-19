import React from 'react'
import classNames from 'classnames'

import { IComponentProps } from 'models/common'
import { ColorType, ColorPalette } from 'models/color'
import { CalculateBox } from 'utils/'

import styles from './style.module.scss'

export enum WordBreak {
  KEEP = 'keep-all',
  BREAK = 'break-all'
}

export enum WhiteSpace {
  NORMAL = 'normal',
  NOWRAP = 'nowrap',
  PRE = 'pre',
  PRE_LINE = 'pre-line',
  PRE_WRAP = 'pre-wrap'
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

interface IProps extends IComponentProps {
  children: React.ReactNode
  lineHeight?: number
  weight?: number
  color?: ColorType
  wordBreak?: WordBreak
  whiteSpace?: WhiteSpace
  size?: number
  align?: TextAlign
  ellipsis?: boolean
}

const P: React.FC<IProps> = ({
  className,
  children,
  color = ColorPalette.Black.BLACK,
  weight = 300,
  lineHeight = 1.1,
  margin = [ 0 ],
  wordBreak = WordBreak.KEEP,
  whiteSpace = WhiteSpace.NORMAL,
  size = 12,
  align = TextAlign.LEFT,
  ellipsis = false
}) => {
  const classProps = classNames(styles.default, className)
  const styleProps = {
    color,
    fontWeight: weight,
    lineHeight,
    margin: CalculateBox(margin),
    wordBreak,
    whiteSpace: ellipsis ? WhiteSpace.NOWRAP : whiteSpace,
    fontSize: size,
    textAlign: align,
    textOverflow: ellipsis ? 'ellipsis' : 'clip',
    overflow: ellipsis ? 'hidden' : 'visible',
    width: ellipsis ? 'calc(100% - 0px)' : '100%'
  }

  return (
    <p className={classProps} style={styleProps}>
      {children}
    </p>
  )
}

export default P
