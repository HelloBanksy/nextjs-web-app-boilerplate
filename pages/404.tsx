import React from 'react'
import styled from 'styled-components'

const Error404Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
  }

  span {
    margin-bottom: ${(props) => props.theme.spaces[2]};
    color: ${(props) => props.theme.colors.secondary};
  }
`

const Error404 = (): JSX.Element => {
  return (
    <Error404Wrap>
      <h1>404 error</h1>
      <span>page not found</span>
      <img src="/travolta.gif" />
    </Error404Wrap>
  )
}

export default Error404
