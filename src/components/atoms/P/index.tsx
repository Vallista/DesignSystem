import React from 'react'
import classNames from 'classnames'

import { IComponentProps } from 'models/common'
import { ColorType, ColorPalette } from 'models/color'
import { CalculateBox } from 'utils/'

import styles from './style.module.scss'

interface IProps extends IComponentProps {
  children: React.ReactNode
  lineHeight?: number
  weight?: number
  color?: ColorType
  margin?: [number, number?, number?, number?]
}

const P: React.FC<IProps> = ({ className, children, color = ColorPalette.Black.BLACK, weight = 300, lineHeight = 1, margin = [0] }) => {
  const classProps = classNames(styles.default, className)
  const styleProps = { color, fontWeight: weight, lineHeight, margin: CalculateBox(margin) }

  return <p className={classProps} style={styleProps}>{children}</p>
}

export default P