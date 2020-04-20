import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Card, { ITheme } from './index'
import { ColorPalette } from '../../../models/color'

export default {
  title: 'Card',
  component: Card
}

export const Default = () => {
  const title = text('타이틀', '컴포넌트 관리 기법')
  const description = text('설명', '안녕하세요 오늘은 컴포넌트 관리에 대해서 알아볼 것이에요')
  const image = text('이미지', 'http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg')
  const viewCount = number('열람 수', 5)

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card title={title} description={description} image={image} viewCount={viewCount} />
    </div>
  )
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

  const title = text('타이틀', '컴포넌트 관리 기법')
  const description = text('설명', '안녕하세요 오늘은 컴포넌트 관리에 대해서 알아볼 것이에요')
  const image = text('이미지', 'http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg')
  const viewCount = number('열람 수', 5)

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: ColorPalette.Gradient.RED_TO_YELLOW
      }}
    >
      <Card title={title} description={description} image={image} viewCount={viewCount} theme={theme} />
    </div>
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
