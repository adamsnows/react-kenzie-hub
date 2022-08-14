import React from 'react'
import StyledBackground from '../../styles/StyledBackground'

const Background = ({children}) => {
  return (
    <StyledBackground>
        {children}
    </StyledBackground>
  )
}

export default Background