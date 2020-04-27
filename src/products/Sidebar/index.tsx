import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import Block, { Direction } from 'components/molecules/Block'
import P from 'components/atoms/P'

import { IProductProps } from '../../models/product'

import styles from './style.module.scss'
import { ColorPalette, ColorType } from '../../models/color'
import Card from 'components/molecules/Card'

export interface ISidebarComponentProps {}

export interface ISidebar {
  name: string
  component: React.FunctionComponent<ISidebarComponentProps>
  default?: boolean
}

export interface ITheme {
  background: ColorType
}

interface IProps extends IProductProps<ITheme> {
  head?: React.ReactNode
  value: string
  config: ISidebar[]
}

const defaultTheme: ITheme = {
  background: ColorPalette.White.WHITE
}

const findState = (config: ISidebar[], val: string) => {
  return config.find((conf) => conf.name === val) || config[0]
}

const Sidebar: React.FC<IProps> = ({ head, value, config, className }) => {
  const [ target, setTarget ] = useState<ISidebar>(findState(config, value))

  const classProps = classNames(styles.default, className)

  useEffect(
    () => {
      setTarget(findState(config, value))
    },
    [ value ]
  )

  const SidebarItem = ({ selected = false, name }: { selected: boolean; name: string }) => {
    const classProps = classNames(styles.item, selected ? styles.selected : '')

    return (
      <Block className={classProps} margin={[ 0, 0, 24, 0 ]}>
        <P className={styles.text} size={18}>
          {name}
        </P>
      </Block>
    )
  }

  return (
    <Block className={classProps}>
      <Card className={styles.sidebarWrapper} radius={[ 12 ]} style={{ background: defaultTheme.background }}>
        <Block direction={Direction.COLUMN} className={styles.sidebar} padding={[ 24 ]}>
          {head}
          <Block direction={Direction.COLUMN} className={styles.list}>
            {config.map((conf) => <SidebarItem selected={target.name === conf.name} name={conf.name} />)}
          </Block>
        </Block>
      </Card>
      {<target.component />}
    </Block>
  )
}

export default Sidebar
