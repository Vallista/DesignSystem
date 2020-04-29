import React from 'react'
import classNames from 'classnames'
import { IComponentProps } from 'models/common'

import styles from './style.module.scss'

interface IProps extends IComponentProps {
  onClick(e: React.MouseEvent<HTMLElement>): void
  href?: string
}

const A: React.FC<IProps> = ({ className, href, onClick, children }) => {
  const classProps = classNames(styles.default, className)

  return (
    <a className={classProps} href={href} onClick={onClick}>
      {children}
    </a>
  )
}

export default A
