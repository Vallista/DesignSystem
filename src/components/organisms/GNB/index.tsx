import React from 'react'
import classNames from 'classnames'

import Block, { Direction, Sort } from '../../molecules/Block'
import { IComponentProps } from '../../../models/common'

import styles from './style.module.scss'

interface IProps extends IComponentProps {
  left: React.ReactNode
  right: React.ReactNode
}

const GNB: React.FC<IProps> = ({ className, left, children, right }) => {
  const classProps = classNames(className, styles.default)

  return (
    <Block className={classProps} direction={Direction.ROW} sort={Sort.SPACE_BETWEEN}>
      <Block sort={Sort.CENTER_LEFT}>{left}</Block>
      <Block>{children}</Block>
      <Block sort={Sort.CENTER_RIGHT}>{right}</Block>
    </Block>
  )
}

export default GNB
