import React from 'react';
import { Switch } from '../src';

export default {
  title: 'Switch',
  component: Switch,
};

export const Basic = args => {
  return <Switch id="switchToClick" {...args} />;
};

Basic.args = {
  hideLabel: true,
  label: 'Turn this setting',
};

Basic.argTypes = {
  checked: {
    description: 'controls checked state',
    control: 'boolean',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  disabled: {
    description: 'controls disabled state',
    control: 'boolean',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  onChange: {
    description: 'an event handler for when checked or unchecked',
    control: null,
    table: {
      type: { summary: 'func' },
    },
  },
  responsive: {
    description:
      'Responsive breakpoint settings. An object with keys as breakpoints and values as sizes. Breakpoints: xs, sm, md, lg. Sizes: small, medium, large, xlarge. Note: xs breakpoint will override size prop for the switch.',
    control: null,
    table: {
      type: { summary: 'object' },
      defaultValue: {
        summary: `{ xs: 'small', sm: 'medium', md: 'large', lg: 'xlarge' }`,
      },
    },
  },
  size: {
    description: 'the size of the loading icon',
    control: {
      type: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    table: {
      type: { summary: `'small', 'medium', 'large', 'xlarge'` },
      defaultValue: { summary: 'medium' },
    },
  },
  label: {
    description:
      'Text to show next to the switch, used as screen reader label if hidden',
    control: 'text',
    table: {
      type: { summary: 'string' },
    },
  },
  hideLabel: {
    description: 'controls label visbility',
    control: 'boolean',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  flip: {
    description: 'show label after switch',
    control: 'boolean',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  block: {
    description:
      'indicates whether the component should stretch to fill parent',
    control: 'boolean',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  textOff: {
    description: 'text for the off state',
    control: 'text',
    table: {
      type: { summary: 'string' },
    },
  },
  textOn: {
    description: 'text for the on state',
    control: 'text',
    table: {
      type: { summary: 'string' },
    },
  },
};

Basic.parameters = {
  docs: {
    source: {
      code: `import { Switch } from '@wdpui/react-gel';

export default () => (
    <Switch textOn="On" textOff="Off" hideLabel label="Turn this setting:" />
); 
`,
    },
  },
};

export const Sizes = () => {
  return (
    <>
      <div>
        <Switch
          size="small"
          textOn="On"
          textOff="Off"
          hideLabel
          label="Turn this setting:"
        />{' '}
        <Switch
          size="medium"
          textOn="On"
          checked
          textOff="Off"
          hideLabel
          label="Turn this setting:"
        />{' '}
        <Switch
          size="large"
          textOn="On"
          textOff="Off"
          hideLabel
          label="Turn this setting:"
        />{' '}
        <Switch
          size="xlarge"
          textOn="On"
          checked
          textOff="Off"
          hideLabel
          label="Turn this setting:"
        />
      </div>
      <div>
        <Switch size="small" checked hideLabel label="Enable some setting?" />{' '}
        <Switch size="medium" hideLabel label="Enable some setting?" />{' '}
        <Switch size="large" checked hideLabel label="Enable some setting?" />{' '}
        <Switch size="xlarge" hideLabel label="Enable some setting?" />{' '}
      </div>
    </>
  );
};

export const Responsive = () => (
  <Switch
    responsive={{
      xs: 'small',
      sm: 'xlarge',
      md: 'small',
      lg: 'xlarge',
    }}
    textOn="On"
    textOff="Off"
    hideLabel
    label="Enable some setting?"
  />
);
