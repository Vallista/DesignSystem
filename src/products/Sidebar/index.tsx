import React, { useState, useEffect } from 'react'

import Block, { Direction } from 'components/molecules/Block'

export interface ISidebarComponentProps {}

export interface ISidebar {
  name: string
  component: React.FunctionComponent<ISidebarComponentProps>
  default?: boolean
}

interface IProps {
  head: React.ReactNode
  value: string
  config: ISidebar[]
}

const Sidebar: React.FC<IProps> = ({ head, value, config }) => {
  const [ NowComponent, setNowComponent ] = useState<React.FunctionComponent<ISidebarComponentProps>>(
    config.find((conf) => conf.name === value)!.component || config[0].component
  )

  useEffect(
    () => {
      setNowComponent(config.find((conf) => conf.name === value)!.component)
    },
    [ value ]
  )

  return (
    <div>
      <Block>{head}</Block>
      <NowComponent />
    </div>
  )
}

export default Sidebar
