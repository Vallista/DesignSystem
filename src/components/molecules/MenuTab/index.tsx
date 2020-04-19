import React from 'react'
import classNames from 'classnames'

import { IComponentProps } from '../../../models/common'

import styles from './style.module.scss'

export enum MenuStyle {
  ROW = 'row',
  COLUMN = 'column'
}

export interface IMenuItem {
  name: string
  component: React.FunctionComponent<any>
  icon?: string
  distance?: [number, number]
  className?: string
}

interface IProps extends IComponentProps {
  items: IMenuItem[]
  style?: MenuStyle
}

interface IItemProps {
  distance: [number, number]
  className?: string
}

const MenuTabItem: React.FC<IItemProps> = ({ children, distance, className }) => {
  const classProps = classNames(styles.menuItem, className)
  const styleProps = {
    margin: [ 0, distance[1], 0, distance[0] ].toString()
  }

  return (
    <li className={classProps} style={styleProps}>
      {children}
    </li>
  )
}

const MenuTab: React.FC<IProps> = ({ className, items, style = MenuStyle.ROW }) => {
  const classProps = classNames(styles.default, className)
  const styleProps = {
    flexDirection: style,
    justifyContent: style === MenuStyle.ROW ? 'center' : 'flex-start',
    alignItems: 'center'
  }

  return (
    <ul className={classProps} style={styleProps}>
      {items.map((item) => {
        const ItemComponent: React.FunctionComponent<any> = item.component

        return (
          <MenuTabItem className={item.className} distance={item.distance || [ 0, 0 ]}>
            <ItemComponent name={item.name} icon={item.icon} />
          </MenuTabItem>
        )
      })}
    </ul>
  )
}

export default MenuTab
