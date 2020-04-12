import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`

export const Pad: FunctionComponent = () => {
  return (
    <StyledPad>
      <Button>MR</Button>
      <Button>MC</Button>
      <Button>M+</Button>
      <Button>M-</Button>
      <Button color="red">AC</Button>
      <Button>C</Button>
      <Button>-/+</Button>
      <Button color="dark">÷</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button color="dark">×</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button color="dark">-</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button color="dark">+</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button color="green" isLarge={true}>=</Button>
    </StyledPad>
  )
}

export default Pad
