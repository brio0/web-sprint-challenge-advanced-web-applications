import React from 'react'
import styled, { keyframes } from 'styled-components'
import PT from 'prop-types'

const rotation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`

const opacity = keyframes`
  from { opacity: 0.2; }
  to { opacity: 1; }
`

const StyledSpinner = styled.div`
  animation: ${opacity} 1s infinite linear;

  h3 {
    transform-origin: center center;
    animation: ${rotation} 1s infinite linear;
  }
`

export default function Spinner(props) {
  // if (!props.spinnerOn) return null
  const { on } = props
  return (
    !on ? null :
      <StyledSpinner id="spinner">
        <h3>&nbsp;.</h3>&nbsp;&nbsp;&nbsp;Please wait...
      </StyledSpinner>
  )
}

Spinner.propTypes = {
  on: PT.bool.isRequired,
}
