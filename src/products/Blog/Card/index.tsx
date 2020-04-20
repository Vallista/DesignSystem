import React from 'react'
import classNames from 'classnames'

import P from 'components/atoms/P'
import Span from 'components/atoms/Span'
import Block, { Direction, Sort } from 'components/molecules/Block'
import Card from 'components/molecules/Card'

import { ColorPalette, ColorType } from 'models/color'
import { IProductProps } from 'models/product'

import styles from './style.module.scss'

import WatchIcon from 'assets/eyes-icon.svg'
import WatchIconBlack from 'assets/eyes-icon-black.svg'

export interface ITheme {
  backgroundColor: ColorType
  textColor: {
    title: ColorType
    description: ColorType
    viewCount: ColorType
  }
}

interface IProps extends IProductProps<ITheme> {
  image: string
  title: string
  description: string
  viewCount: number
}

const defaultTheme: ITheme = {
  backgroundColor: ColorPalette.Gradient.RED_TO_YELLOW,
  textColor: {
    title: ColorPalette.White.WHITE,
    description: ColorPalette.White.SMOKE,
    viewCount: ColorPalette.White.WHITE
  }
}

const BlogCard: React.FC<IProps> = ({
  className,
  image,
  title,
  description,
  viewCount,
  theme = defaultTheme,
  margin
}) => {
  const isWhiteTheme = theme.backgroundColor === ColorPalette.White.WHITE

  const classProps = classNames(className, styles.cardWrap)
  const styleProps = {
    backgroundImage: isWhiteTheme ? null : `url('${image}')`
  }

  const backgroundColor = theme.backgroundColor

  return (
    <Card className={classProps} style={styleProps} radius={[ 12 ]} margin={margin}>
      <Block
        className={styles.card}
        direction={Direction.COLUMN}
        padding={isWhiteTheme ? [ 42, 12, 24, 12 ] : [ 24 ]}
        style={{ background: backgroundColor }}
        sort={isWhiteTheme ? Sort.SPACE_BETWEEN_CENTER : Sort.BOTTOM_LEFT}
      >
        <Block className={styles.header}>
          <img className={styles.watchIcon} src={isWhiteTheme ? WatchIconBlack : WatchIcon} alt='watch-icon' />
          <Span className={styles.watchCount} color={theme.textColor.viewCount} size={16} weight={500} lineHeight={1.4}>
            {viewCount}
          </Span>
        </Block>
        {isWhiteTheme && (
          <Card radius={[ 6 ]} margin={[ 0, 0, 24 ]}>
            <Block className={styles.imageWrapper}>
              <img className={styles.image} src={image} alt='title-img' />
            </Block>
          </Card>
        )}
        <Block className={styles.textWrapper} direction={Direction.COLUMN}>
          <P
            className={styles.text}
            ellipsis={true}
            size={20}
            weight={400}
            color={theme.textColor.title}
            margin={[ 0, 0, 12 ]}
          >
            {title}
          </P>
          <P className={styles.text} size={12} weight={300} color={theme.textColor.description}>
            {description}
          </P>
        </Block>
      </Block>
    </Card>
  )
}

export default BlogCard
