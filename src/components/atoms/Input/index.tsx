import React from 'react'
import classNames from 'classnames'

import { IComponentProps } from '../../../models/common'

import styles from 'style.module.scss'

export enum InputType {
  BUTTON = 'button',
  CHECKBOX = 'checkbox',
  DATE = 'date',
  EMAIL = 'email',
  FILE = 'file',
  hidden = 'HIDDEN',
  IMAGE = 'image',
  NUMBER = 'number',
  PASSWORD = 'password',
  RADIO = 'radio',
  SUBMIT = 'submit',
  TEXT = 'text',
  TEL = 'tel',
  SEARCH = 'search',
  TIME = 'time'
}

interface IProps extends IComponentProps {
  value: string | number
  type?: InputType
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

const Input: React.FC<IProps> = ({ className, value, type, isCapturing, onChange }) => {
  const classProps = classNames(styles.default, className)
  const changeEvent = isCapturing ? { onChangeCapture: onChange } : { onChange }

  return <input className={classProps} type={type} value={value} {...changeEvent} />
}

export default Input
