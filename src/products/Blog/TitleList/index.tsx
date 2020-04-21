import React from 'react'

import P from 'components/atoms/P'
import Block, { Sort } from 'components/molecules/Block'
import Scrollable, { ViewType } from 'components/organisms/Scrollable'

import { ColorPalette } from 'models/color'
import { IProductProps } from 'models/product'
import { ColorType } from 'models/color'

import Card from 'products/Blog/Card'

import styles from './style.module.scss'

export interface ITheme {
  lineColor: ColorType
  textColor: {
    title: ColorType
  }
}

interface IProps extends IProductProps<ITheme> {
  title: string
  list: { title: string; description: string; image: string; viewCount: number }[]
}

const defaultTheme: ITheme = {
  lineColor: ColorPalette.Gray.LIGHT,
  textColor: {
    title: ColorPalette.Black.LIGHT
  }
}

interface IHeaderProps {
  title: string
  theme: ITheme
}

const TitleHeader: React.FC<IHeaderProps> = ({ title, theme }) => {
  const styleProps = { borderBottom: `1px solid ${theme.lineColor}` }

  return (
    <Block style={styleProps} padding={[ 0, 0, 12, 0 ]} margin={[ 12, 0, 12, 12 ]} sort={Sort.CENTER_LEFT}>
      <P weight={600} color={theme.textColor.title} size={32}>
        {title}
      </P>
    </Block>
  )
}

const TitleList: React.FC<IProps> = ({ list, title, theme = defaultTheme }) => {
  return (
    <Scrollable
      viewType={ViewType.OVERFLOW}
      className={styles.default}
      header={<TitleHeader title={title} theme={theme} />}
      padding={[ 24 ]}
      innerPadding={[ 24, 24, 24, 24 ]}
    >
      {list.map((listItem, idx) => <Card key={`list-item-${idx}`} {...listItem} margin={[ 0, 12, 0, 0 ]} />)}
    </Scrollable>
  )
}

export default TitleList
