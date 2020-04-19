import React from 'react'
import classNames from 'classnames'

import P from 'components/atoms/P'
import Span from 'components/atoms/Span'
import Block, { Direction, Sort } from 'components/molecules/Block'
import Card from 'components/molecules/Card'

import { ColorPalette } from '../../../models/color'

import styles from './style.module.scss'

import WatchIcon from 'assets/eyes-icon.svg'

interface IProps {
  image: string
  title: string
  description: string
  viewCount: number
}

const BlogCard: React.FC<IProps> = ({ image, title, description, viewCount }) => {
  const classProps = classNames(styles.cardWrap)
  const styleProps = {
    backgroundImage: `url('${image}')`
  }

  return (
    <Card className={classProps} style={styleProps} radius={[ 12 ]}>
      <Block
        className={styles.card}
        direction={Direction.COLUMN}
        padding={[ 24 ]}
        style={{ background: ColorPalette.Gradient.RED_TO_YELLOW }}
        sort={Sort.BOTTOM_CENTER}
      >
        <Block className={styles.header}>
          <img className={styles.watchIcon} src={WatchIcon} alt='watch-icon' />
          <Span className={styles.watchCount} color={ColorPalette.White.WHITE} size={16} weight={500} lineHeight={1.8}>
            {viewCount}
          </Span>
        </Block>
        {/* <Card className={styles.imageWrapper} radius={[ 3 ]}>
          <img className={styles.image} src={image} alt='header-img' />
        </Card> */}
        <Block className={styles.textWrapper} direction={Direction.COLUMN}>
          <P
            className={styles.text}
            ellipsis={true}
            size={20}
            weight={400}
            color={ColorPalette.White.WHITE}
            margin={[ 0, 0, 12 ]}
          >
            {title}
          </P>
          <P className={styles.text} size={12} weight={300} color={ColorPalette.White.SMOKE}>
            {description}
          </P>
        </Block>
      </Block>
    </Card>
  )
}

export default BlogCard
