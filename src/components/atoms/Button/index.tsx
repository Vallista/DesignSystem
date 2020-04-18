import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

export enum ButtonType {
  SUBMIT = 'submit',
  BUTTON = 'button',
  RESET = 'reset'
}

interface IProps {
  isCapture?: boolean
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
  type?: ButtonType
  className: string
}

const Button: React.FC<IProps> = ({ children, className, isCapture = false, onClick, type = ButtonType.BUTTON }) => {
  const classProps = classNames(styles.default, className)
  let clickEvent = isCapture ? { onClickCapture: onClick } : { onClick }

  return (
    <button type={type} {...clickEvent} className={classProps}>
      {children}
    </button>
  )
}

export default Button
