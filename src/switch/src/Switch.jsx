/* stylelint-disable selector-type-no-unknown, selector-type-case */
/* stylelint-disable selector-list-comma-newline-after */

import React from 'react';
import PropTypes from 'prop-types';
import {
  SwitchWrapper,
  SwitchInput,
  SwitchText,
  SwitchToggleOff,
  SwitchToggleOn,
  SwitchToggle,
} from './styles';

const Switch = ({
  label,
  hideLabel,
  flip,
  block,
  textOn,
  textOff,
  checked,
  onChange,
  ...props
}) => (
  <SwitchWrapper flip={flip} {...props}>
    <SwitchInput
      defaultChecked={checked}
      onChange={onChange}
      flip={flip}
      {...props}
    />
    <SwitchText flip={flip} block={block} hideLabel={hideLabel}>
      {label}
    </SwitchText>
    <SwitchToggle flip={flip}>
      {textOff && <SwitchToggleOff>{textOff}</SwitchToggleOff>}
      {textOn && <SwitchToggleOn>{textOn}</SwitchToggleOn>}
    </SwitchToggle>
  </SwitchWrapper>
);

export default Switch;

const sizePropType = PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']);

Switch.propTypes = {
  /**
   * Controls checked state
   */
  checked: PropTypes.bool,
  /**
   * Controls disabled state
   */
  disabled: PropTypes.bool,
  /**
   * An event handler for when checked or unchecked
   */
  onChange: PropTypes.func,
  /**
   * Responsive breakpoint settings. An object with keys as breakpoints and values as sizes.
   * Breakpoints: xs, sm, md, lg. Sizes: small, medium, large, xlarge. Note: xs breakpoint will
   * override size prop for the switch.
   */
  responsive: PropTypes.shape({
    xs: sizePropType,
    sm: sizePropType,
    md: sizePropType,
    lg: sizePropType,
  }),
  /**
   * The size of the loading icon
   */
  size: sizePropType,
  /**
   * Text to show next to the switch
   * (Used as screen reader label if hidden)
   */
  label: PropTypes.string.isRequired,
  /**
   * Controls label visibility
   */
  hideLabel: PropTypes.bool,
  /**
   * Show label after switch
   */
  flip: PropTypes.bool,
  /**
   * Inidicates whether the component should stretch to fill parent
   */
  block: PropTypes.bool,
  /**
   * Text for the Off state
   */
  textOff: PropTypes.string,
  /**
   * Text for the On state
   */
  textOn: PropTypes.string,
};

Switch.defaultProps = {
  size: 'medium',
  checked: false,
  disabled: false,
  onChange: null,
  hideLabel: false,
  flip: false,
  block: false,
  textOn: null,
  textOff: null,
  responsive: null,
};
