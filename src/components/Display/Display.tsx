import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface DisplayProps {
  hasMemory: boolean
  operator: '+' | '-' | '×' | '÷' | ''
  value: string
}

const StyledIndicatorList = styled.div`
  font-size: 0.75em;
  opacity: 0.4;
  text-align: right;
`;

const StyledIndicatorItem = styled.span`
  display: inline-block;
  min-width: 1.2em;
  text-align: right;

  &:last-child {
    margin-right: 0;
  }
`;

const StyleScreen = styled.div`
  font-size: 2.5em;
  min-height: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  overflow: hidden;
`

const StyledDisplay = styled.div`
  background-color: #393939;
  color: #fff;
  padding: 1.5em 1em;
`

export const Screen: FunctionComponent<DisplayProps> = ({ value, hasMemory, operator }) => {
  return (
    <StyledDisplay>
      <StyledIndicatorList>
        {hasMemory &&
          <StyledIndicatorItem>M</StyledIndicatorItem>
        }

        <StyledIndicatorItem>
          {operator}
        </StyledIndicatorItem>
      </StyledIndicatorList>

      <StyleScreen>
        {value}
      </StyleScreen>
    </StyledDisplay>
  )
}

export default Screen
