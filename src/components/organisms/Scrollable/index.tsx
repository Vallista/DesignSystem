import React from 'react'
import classNames from 'classnames'

import Block, { Direction } from 'components/molecules/Block'

import { IComponentProps } from '../../../models/common'

import styles from './style.module.scss'

export enum ScrollType {
  HORIZONTAL,
  VERTICAL
}

export enum ViewType {
  WRAP,
  OVERFLOW
}

interface IProps extends IComponentProps {
  scrollType?: ScrollType
  viewType?: ViewType
  header?: React.ReactNode
  contentsClassName?: string
}

const Scrollable: React.FC<IProps> = ({
  className,
  children,
  scrollType,
  viewType,
  padding,
  margin,
  header,
  contentsClassName
}) => {
  const classProps = classNames(styles.default, className)
  const contentsClassProps = classNames(styles.contents, contentsClassName)

  const styleProps = {
    [scrollType === ScrollType.HORIZONTAL ? 'overflow-x' : 'overflow-y']:
      viewType === ViewType.OVERFLOW ? 'auto' : 'visible',
    flexWrap: ViewType.WRAP ? 'wrap' : 'nowrap'
  }

  return (
    <Block className={classProps} margin={margin} padding={padding}>
      {header}
      <Block
        className={contentsClassProps}
        direction={scrollType === ScrollType.HORIZONTAL ? Direction.ROW : Direction.COLUMN}
        style={styleProps}
      >
        {children}
      </Block>
    </Block>
  )
}

export default Scrollable
