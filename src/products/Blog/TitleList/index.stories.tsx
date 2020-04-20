import React from 'react'
import { withKnobs, object, text } from '@storybook/addon-knobs'

import TitleList from './index'
import { ColorPalette } from 'models/color'
import { ITheme } from '../Card'

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

  return <TitleList list={optionWrapper.list} title={title} />
}

export const White = () => {
  const theme: ITheme = {
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
        theme: theme
      },
      {
        title: '타이틀',
        description: '설명',
        image: 'http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg',
        viewCount: 5,
        theme: theme
      }
    ]
  }

  const optionWrapper = object('리스트', option)
  const title = text('타이틀', 'Feature')

  return <TitleList list={optionWrapper.list} title={title} />
}

Default.story = {
  name: 'Default',
  decorators: [ withKnobs ]
}

White.story = {
  name: 'White',
  decorators: [ withKnobs ]
}
