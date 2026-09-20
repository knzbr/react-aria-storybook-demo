import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { HelloWorld } from './HelloWorld'

const meta = {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  args: {
    message: 'Hello World'
  }
} satisfies Meta<typeof HelloWorld>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
