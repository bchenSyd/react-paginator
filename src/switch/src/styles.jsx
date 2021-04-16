import styled, { css } from "styled-components";

export const SwitchToggleOff = styled.span`
  color: ${({ theme }) => theme.palette.off};
  position: absolute;
  text-align: center;
  transition: opacity 0.3s ease;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  box-sizing: border-box;

  @media print {
    font-size: ${({ theme }) => theme.typography.fontscale(1)};
    left: 14px;
    right: auto;
    top: 0;
  }

  /* Specific to 'SwitchToggleOff', unset in 'SwitchToggleOn' CSS */
  right: 0;
`;

export const SwitchToggleOn = styled(SwitchToggleOff)`
  right: unset;
  opacity: 0;
  left: 0;
  color: ${({ theme }) => theme.palette.white};
`;

export const SwitchToggle = styled.span`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  border: 2px solid ${({ theme }) => theme.palette.border};
  background-color: #fff;
  overflow: hidden;
  line-height: 1.5;
  transition: border 0.3s ease, background 0.3s ease;
  user-select: none;
  box-sizing: border-box;

  ${({ flip }) =>
    flip &&
    css`
      right: auto;
      left: 0;
    `};

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 3px 0 6px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  @media print {
    display: inline;
    border: 0 none;
    font-size: 0 !important;

    &::after {
      display: none;
    }
  }
`;

export const SwitchText = styled.span`
  display: table-cell;
  vertical-align: middle;
  white-space: normal;
  position: relative;
  padding-right: 0.375rem;

  ${({ flip }) =>
    flip &&
    css`
      padding-left: 0.375rem;
      padding-right: 0;
    `};

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `};

  ${({ hideLabel }) =>
    hideLabel &&
    css`
      position: absolute;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
    `};
`;

export const SwitchInput = styled.input.attrs({
  type: "checkbox",
})`
  position: absolute;
  z-index: -1;
  opacity: 0;
  box-sizing: border-box;

  ${({ flip }) =>
    flip &&
    css`
      right: auto;
      left: 0;
    `};

  @media print {
    position: static;
    opacity: 1;
  }

  ${({ theme, disabled }) =>
    disabled &&
    css`
      & ~ ${SwitchText} {
        cursor: not-allowed;
        color: ${theme.palette.disabled};
      }

      & ~ ${SwitchToggle} {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `};

  &:checked {
    & ~ ${SwitchToggle} {
      border-color: ${({ theme }) => theme.palette.border};
      background-color: ${({ theme }) => theme.palette.primary};

      ${SwitchToggleOff} {
        opacity: 0;
      }

      ${SwitchToggleOn} {
        opacity: 1;
      }

      &::after {
        left: 100%;
        transform: translateX(-100%);
        box-shadow: -3px 0 6px 0 rgba(0, 0, 0, 0.3);
      }
    }
  }

  &:focus,
  &:hover {
    & ~ ${SwitchToggle} {
      outline: none;
    }
  }
`;

function getSizeCss(size, theme) {
  switch (size) {
    case "small":
      return css`
        height: 1.875rem;
        padding-right: 4.375rem;

        & > ${SwitchToggle} {
          border-radius: 1.875rem;
          height: 1.875rem;
          width: 70px;

          & > ${SwitchToggleOn}, & > ${SwitchToggleOff} {
            line-height: 26px;
            font-size: ${theme.typography.fontscale(1)};
            width: 2.5rem;
            width: calc(100% - 26px);
          }

          &::after {
            width: 1.625rem;
            height: 1.625rem;
          }
        }

        ${({ flip }) =>
          flip &&
          css`
            padding-left: 4.375rem;
            padding-right: 0;
          `};
      `;
    case "large":
      return css`
        height: 2.625rem;
        padding-right: 5.563rem;

        & ${SwitchToggle} {
          border-radius: 2.625rem;
          height: 2.625rem;
          width: 5.563rem;

          & ${SwitchToggleOn}, & ${SwitchToggleOff} {
            line-height: 38px;
            font-size: ${theme.typography.fontscale(2)};
            width: 2.9375rem;
            width: calc(100% - 38px);
          }

          &::after {
            width: 2.375rem;
            height: 2.375rem;
          }
        }

        ${({ flip }) =>
          flip &&
          css`
            padding-left: 5.563rem;
            padding-right: 0;
          `};
      `;
    case "xlarge":
      return css`
        height: 3rem;
        padding-right: 6rem;

        & ${SwitchToggle} {
          border-radius: 3rem;
          height: 3rem;
          width: 6rem;

          & ${SwitchToggleOn}, & ${SwitchToggleOff} {
            line-height: 44px;
            font-size: ${theme.typography.fontscale(3)};
            width: 3rem;
            width: calc(100% - 44px);
          }

          &::after {
            width: 2.75rem;
            height: 2.75rem;
          }
        }

        ${({ flip }) =>
          flip &&
          css`
            padding-left: 6rem;
            padding-right: 0;
          `};
      `;
    case "medium":
    default:
      return css`
        height: 2.25rem;
        padding-right: 5rem;

        & ${SwitchToggle} {
          border-radius: 2.25rem;
          height: 2.25rem;
          width: 5rem;

          & ${SwitchToggleOn}, & ${SwitchToggleOff} {
            line-height: 32px;
            font-size: ${theme.typography.fontscale(2)};
            width: 2.75rem;
            width: calc(100% - 32px);
          }

          &::after {
            width: 2rem;
            height: 2rem;
          }
        }

        ${({ flip }) =>
          flip &&
          css`
            padding-left: 5rem;
            padding-right: 0;
          `};
      `;
  }
}

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-table !important;
  vertical-align: top;
  margin-right: 1.125rem;
  cursor: pointer;

  ${({ block }) =>
    block &&
    css`
      width: 100%;
      margin-right: 0;
    `};

  &::before,
  &::after {
    content: "";
    display: table;
  }

  &::after {
    clear: both;
  }

  &::hover {
    cursor: pointer;
  }

  @media print {
    height: auto !important;
  }

  ${({ responsive, size, theme }) =>
    responsive && responsive.xs
      ? getSizeCss(responsive.xs, theme)
      : getSizeCss(size, theme)} ${({ theme, responsive }) =>
    responsive &&
    Object.entries(responsive)
      .map(([breakpointProp, sizeProp]) =>
        theme.breakpoint && theme.breakpoint[breakpointProp]
          ? theme.breakpoint[breakpointProp]`${getSizeCss(
              sizeProp,
              theme
            )}`.join("")
          : ""
      )
      .join("\n")};
`;
