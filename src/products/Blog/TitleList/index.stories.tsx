import React from 'react'
import { withKnobs, object, text } from '@storybook/addon-knobs'

import TitleList from './index'

import { ColorPalette } from 'models/color'

import { ITheme as ICardTheme } from '../Card'
import { ITheme as IListTheme } from '../TitleList'

import { Background } from '../_common'

export default {
  title: 'TitleList',
  component: TitleList
}

export const Default = () => {
  const option = {
    list: [
      {
        title: '타이틀',
        description: '설명',
        image: 'http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg',
        viewCount: 5
      },
      {
        title: '타이틀',
        description: '설명',
        image: 'http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg',
        viewCount: 5
      }
    ]
  }

  const optionWrapper = object('리스트', option)
  const title = text('타이틀', 'Feature')

  return (
    <Background>
      <TitleList list={optionWrapper.list} title={title} />
    </Background>
  )
}

export const White = () => {
  const listTheme: IListTheme = {
    lineColor: ColorPalette.White.SNOW,
    textColor: {
      title: ColorPalette.White.WHITE
    }
  }

  const cardTheme: ICardTheme = {
    backgroundColor: ColorPalette.White.WHITE,
    textColor: {
      title: ColorPalette.Black.LIGHT,
      description: ColorPalette.Gray.DARK,
      viewCount: ColorPalette.Black.LIGHT
    }
  }

  const option = {
    list: [
      {
        title: '타이틀',
        description: '설명',
        image: 'http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg',
        viewCount: 5,
        theme: cardTheme
      },
      {
        title: '타이틀',
        description: '설명',
        image: 'http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg',
        viewCount: 5,
        theme: cardTheme
      }
    ]
  }

  const optionWrapper = object('리스트', option)
  const title = text('타이틀', 'Feature')

  return (
    <Background background={ColorPalette.Gradient.RED_TO_YELLOW}>
      <TitleList theme={listTheme} list={optionWrapper.list} title={title} />
    </Background>
  )
}

Default.story = {
  name: 'Default',
  decorators: [ withKnobs ]
}

White.story = {
  name: 'White',
  decorators: [ withKnobs ]
}
