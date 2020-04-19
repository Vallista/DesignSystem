import React from 'react'
import classNames from 'classnames'

import { IComponentProps } from 'models/common'
import { ColorType, ColorPalette } from 'models/color'
import { CalculateBox } from 'utils/'

import styles from './style.module.scss'

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
  size?: number
  align?: TextAlign
}

const Span: React.FC<IProps> = ({
  children,
  className,
  lineHeight = 1,
  weight = 300,
  color = ColorPalette.Black.BLACK,
  size = 12,
  margin = [ 0 ],
  align = TextAlign.LEFT
}) => {
  const classProps = classNames(styles.default, className)
  const styleProps = {
    fontSize: size,
    color,
    fontWeight: weight,
    lineHeight,
    margin: CalculateBox(margin),
    textAlign: align
  }

  return (
    <span className={classProps} style={styleProps}>
      {children}
    </span>
  )
}

export default Span
