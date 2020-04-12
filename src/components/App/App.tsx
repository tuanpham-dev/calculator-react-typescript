import React from 'react'
import styled from 'styled-components'
import Display from '../Display/Display'
import Pad from '../Pad/Pad'

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue" ,Arial ,sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  width: 100%;
  max-width: 320px;
`

export const App = () => {
  return (
    <StyledApp>
      <Display value="123" hasMemory={true} operator="+" />
      <Pad />
    </StyledApp>
  )
}

export default App
