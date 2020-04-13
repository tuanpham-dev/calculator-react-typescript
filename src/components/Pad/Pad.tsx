import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { Digit, Operator } from '../../lib/types'

interface PadProps {
  onDigitButtonClick: (digit: Digit) => void
  onPointButtonClick: () => void
  onOperatorButtonClick: (operator: Operator) => void
  onChangeSignButtonClick: () => void
  onEqualButtonClick: () => void
  onAllClearButtonClick: () => void
  onClearEntryButtonClick: () => void
  onMemoryRecallButtonClick: () => void
  onMemoryClearButtonClick: () => void
  onMemoryPlusButtonClick: () => void
  onMemoryMinusButtonClick: () => void
}

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`

export const Pad: FunctionComponent<PadProps> = ({
  onDigitButtonClick,
  onPointButtonClick,
  onOperatorButtonClick,
  onChangeSignButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
  onClearEntryButtonClick,
  onMemoryRecallButtonClick,
  onMemoryClearButtonClick,
  onMemoryPlusButtonClick,
  onMemoryMinusButtonClick
}) => {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    console.log(keyCode)
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick((keyCode - 48) as Digit)
    } else if ((keyCode >= 96 && keyCode <= 105)) {
      onDigitButtonClick((keyCode - 96) as Digit)
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick('+')
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick('-')
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick('×')
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick('÷')
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick()
    } else if (keyCode === 46) {
      onClearEntryButtonClick()
    } else if (keyCode === 27) {
      onAllClearButtonClick()
    } else if (keyCode === 78) {
      onChangeSignButtonClick()
    } else if (keyCode === 80) {
      onMemoryPlusButtonClick()
    } else if (keyCode === 81) {
      onMemoryMinusButtonClick()
    } else if (keyCode === 82) {
      onMemoryRecallButtonClick()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <StyledPad>
      <Button onClick={onMemoryRecallButtonClick}>
        MR
      </Button>
      <Button onClick={onMemoryClearButtonClick}>
        MC
      </Button>
      <Button onClick={onMemoryPlusButtonClick}>
        M+
      </Button>
      <Button onClick={onMemoryMinusButtonClick}>
        M-
      </Button>
      <Button color="red" onClick={onAllClearButtonClick}>
        AC
      </Button>
      <Button onClick={onClearEntryButtonClick}>
        C
      </Button>
      <Button onClick={onChangeSignButtonClick}>
        -/+
      </Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('÷')}>
        ÷
      </Button>
      <Button onClick={() => onDigitButtonClick(7)}>
        7
      </Button>
      <Button onClick={() => onDigitButtonClick(8)}>
        8
      </Button>
      <Button onClick={() => onDigitButtonClick(9)}>
        9
      </Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('×')}>
        ×
      </Button>
      <Button onClick={() => onDigitButtonClick(4)}>
        4
      </Button>
      <Button onClick={() => onDigitButtonClick(5)}>
        5
      </Button>
      <Button onClick={() => onDigitButtonClick(6)}>
        6
      </Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('-')}>
        -
      </Button>
      <Button onClick={() => onDigitButtonClick(1)}>
        1
      </Button>
      <Button onClick={() => onDigitButtonClick(2)}>
        2
      </Button>
      <Button onClick={() => onDigitButtonClick(3)}>
        3
      </Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('+')}>
        +
      </Button>
      <Button onClick={() => onDigitButtonClick(0)}>
        0
      </Button>
      <Button onClick={onPointButtonClick}>
        .
      </Button>
      <Button color="green" isLarge={true} onClick={onEqualButtonClick}>
        =
      </Button>
    </StyledPad>
  )
}

export default Pad
