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
  transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
  ${({ color }) => colorToCss(color)}
  ${({ isLarge }) =>
    isLarge &&
    css`
      grid-column-end: span 2;
    `}

  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:focus {
    outline: 0;
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.3s, opacity 1s;
  }

  :active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`

export const Button: FunctionComponent<ButtonProps> = ({ children, color, isLarge, onClick }) => {
  return (
    <StyledButton color={color} isLarge={isLarge} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
