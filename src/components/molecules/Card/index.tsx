import React from 'react'
import classNames from 'classnames'

import { IComponentProps } from 'models/common'
import { CalculateBox } from 'utils'

import styles from './style.module.scss'

interface IProps extends IComponentProps {
  radius?: [number, number?, number?, number?]
  padding?: [number, number?, number?, number?]
}

const Card: React.FC<IProps> = ({ className, radius = [0], padding = [0] }) => {
  const classProps = classNames(className, styles.default)
  const styleProps = { borderRadius: CalculateBox(radius).toString(), padding: CalculateBox(padding).toString() }

  return <div className={classProps} style={styleProps} />
}

export default Card
