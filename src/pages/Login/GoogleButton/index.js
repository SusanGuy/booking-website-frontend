import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
`
const Text = styled.p`
  color: black;
`
const Span = styled.span`
  margin: 0 10px 0 0;
`
const GoogleButton = () => {
  return (
    <Div>
      <Span>
        <img src={require('../../../assets/img/google-48.png')} alt='' />
      </Span>
      <Span>
        <Text>Login in With Google</Text>
      </Span>
    </Div>
  )
}

export default GoogleButton
