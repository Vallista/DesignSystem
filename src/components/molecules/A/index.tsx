import React from 'react'
import { IComponentProps } from 'models/common'

interface IProps extends IComponentProps {
  onClick(e: React.MouseEvent<HTMLElement>): void
  href?: string
}

const A: React.FC<IProps> = ({ href, onClick, children }) => {
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  )
}

export default A
