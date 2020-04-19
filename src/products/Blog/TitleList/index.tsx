import React from 'react'

import P from 'components/atoms/P'
import Block, { Sort } from 'components/molecules/Block'
import Scrollable, { ViewType, ScrollType } from 'components/organisms/Scrollable'

import { ColorPalette } from 'models/color'

import Card from 'products/Blog/Card'

import styles from './style.module.scss'

interface IProps {
  title: string
  list: { title: string; description: string; image: string; viewCount: number }[]
}

interface IHeaderProps {
  title: string
}

const TitleHeader: React.FC<IHeaderProps> = ({ title }) => {
  const styleProps = { borderBottom: `1px solid ${ColorPalette.Gray.LIGHT}` }

  return (
    <Block style={styleProps} padding={[ 0, 0, 12, 0 ]} margin={[ 12, 0, 12, 12 ]} sort={Sort.CENTER_LEFT}>
      <P weight={600} color={ColorPalette.Black.LIGHT} size={32}>
        {title}
      </P>
    </Block>
  )
}

const TitleList: React.FC<IProps> = ({ list, title }) => {
  return (
    <Scrollable
      viewType={ViewType.OVERFLOW}
      className={styles.default}
      header={<TitleHeader title={title} />}
      padding={[ 24 ]}
      innerPadding={[ 24, 24, 24, 24 ]}
    >
      {list.map((listItem, idx) => (
        <Card
          key={`list-item-${idx}`}
          className={styles.listItem}
          title={listItem.title}
          description={listItem.description}
          image={listItem.image}
          viewCount={listItem.viewCount}
        />
      ))}
    </Scrollable>
  )
}

export default TitleList
