import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import Span from 'components/atoms/Span'
import Block, { Direction, Sort } from 'components/molecules/Block'
import Card from 'components/molecules/Card'
import A from 'components/molecules/A'

import { IProductProps } from 'models/product'

import styles from './style.module.scss'
import { ColorPalette, ColorType } from '../../models/color'

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

  const SidebarItem = (conf: ISidebar, selected: boolean) => {
    return (
      <Block className={styles.item} margin={[ 0, 0, 24, 0 ]}>
        <A
          onClick={() => {
            setTarget(conf)
          }}
        >
          <Span className={styles.text} size={18} color={selected ? ColorPalette.Red.RED : ColorPalette.Gray.DARK}>
            {conf.name}
          </Span>
        </A>
      </Block>
    )
  }

  return (
    <Block className={classProps} direction={Direction.ROW} sort={Sort.TOP_LEFT}>
      <Card
        className={styles.sidebarWrapper}
        radius={[ 12 ]}
        style={{ background: defaultTheme.background }}
        margin={[ 0, 50, 0, 0 ]}
      >
        <Block direction={Direction.COLUMN} className={styles.sidebar} padding={[ 24 ]}>
          {head}
          <Block direction={Direction.COLUMN} className={styles.list}>
            {config.map((conf) => SidebarItem(conf, conf.name === target.name))}
          </Block>
        </Block>
      </Card>
      {<target.component />}
    </Block>
  )
}

export default React.memo(Sidebar)
