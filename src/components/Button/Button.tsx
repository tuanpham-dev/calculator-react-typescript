import React, { FunctionComponent } from 'react'

import styled, { css } from 'styled-components'

interface ButtonProps {
  color?: 'red' | 'green' | 'dark'
  isLarge?: boolean
  onClick?: () => void
}

const colorToCss = (color: ButtonProps['color']) => {
  switch (color) {
    case 'red':
      return css`
        background-color: #c04444;
        color: #fff;

        &:hover,
        &:focus {
          background-color: #af3b3b;
        }
      `
    case 'green':
      return css`
        background-color: #018645;
        color: #fff;

        &:hover,
        &:focus {
          background-color: #016d38;
        }
      `
    case 'dark':
      return css`
        background-color: #272727;
        color: #c5830d;

        &:hover,
        &:focus {
          background-color: #1a1a1a;
        }
      `
  }

  return css`
    background-color: #2e2e2e;
    color: #fff;

    &:hover,
    &:focus {
      background-color: #212121;
    }
  `
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: inherit;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0;
  padding-top: 1em;
  padding-bottom: 1em;
  transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  ${({ color }) => colorToCss(color)}
  ${({ isLarge }) => isLarge && css`
    grid-column-end: span 2;
  `}

  &:focus {
    outline: 0;
  }

  &:active {
    opacity: 0.9;
  }
`

export const Button: FunctionComponent<ButtonProps> = ({ children, color, isLarge }) => {
  return (
    <StyledButton color={color} isLarge={isLarge}>
      {children}
    </StyledButton>
  )
}

export default Button
