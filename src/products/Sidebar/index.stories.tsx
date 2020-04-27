import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Sidebar, { ISidebar } from './index'

export default {
  title: 'Products|Sidebar',
  component: Sidebar
}

export const Default = () => {
  const config: ISidebar[] = [
    {
      name: 'page1',
      component: () => <div>page1</div>,
      default: true
    },
    {
      name: 'page2',
      component: () => <div>page2</div>
    }
  ]

  const value = text('사이드바 타겟', 'page1')

  return <Sidebar value={value} config={config} />
}

Default.story = {
  name: 'Default',
  decorators: [ withKnobs ]
}
