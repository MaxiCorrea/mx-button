import type { Meta, StoryObj } from '@storybook/react'
import { MxButton } from '..'

const meta: Meta<typeof MxButton> = {
  title: 'Example/MxButton',
  component: MxButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    
  }
}

export default meta
type Story = StoryObj<typeof MxButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
    label : "Button"
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label : "Button"
  }
}

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    label : "Button"
  }
}

export const Square: Story = {
  args: {
    variant: 'square',
    label : "Button"
  }
}

export const Text: Story = {
  args: {
    variant: 'text',
    label : "Button"
  }
}
