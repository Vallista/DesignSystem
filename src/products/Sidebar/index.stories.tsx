import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Products|Sidebar',
  component: <div>123</div>
}

export const Default = () => {
  return <div>123</div>
}

Default.story = {
  name: 'Default',
  decorators: [ withKnobs ]
}
