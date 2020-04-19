import React from 'react'
import classNames from 'classnames'

import Block, { Direction, Sort } from 'components/molecules/Block'

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
  innerPadding?: [number, number?, number?, number?]
}

const Scrollable: React.FC<IProps> = ({
  className,
  children,
  scrollType = ScrollType.HORIZONTAL,
  viewType = ViewType.WRAP,
  padding,
  margin,
  header,
  innerPadding,
  contentsClassName
}) => {
  const classProps = classNames(styles.default, className)
  const contentsClassProps = classNames(styles.contents, contentsClassName)

  const styleProps = {
    [scrollType === ScrollType.HORIZONTAL ? 'overflowX' : 'overflowY']:
      viewType === ViewType.OVERFLOW ? 'auto' : 'visible',
    flexWrap: ViewType.WRAP ? 'wrap' : 'nowrap'
  }

  return (
    <Block className={classProps} margin={margin} direction={Direction.COLUMN} padding={padding} sort={Sort.TOP_LEFT}>
      {header}
      <Block
        className={contentsClassProps}
        direction={scrollType === ScrollType.HORIZONTAL ? Direction.ROW : Direction.COLUMN}
        style={styleProps}
      >
        <Block sort={Sort.TOP_LEFT} padding={innerPadding}>{children}</Block>
      </Block>
    </Block>
  )
}

export default Scrollable
