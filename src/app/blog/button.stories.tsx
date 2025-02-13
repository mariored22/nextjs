import type { Meta, StoryObj } from '@storybook/react';

const Button = ({ label }: { label: string }) => {
  return <button>{label}</button>;
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};