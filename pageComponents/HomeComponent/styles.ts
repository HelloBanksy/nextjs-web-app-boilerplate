import styled from 'styled-components'

export const HomepageWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DummyDataTrigger = styled.b`
  cursor: pointer;
  color: ${(props) => props.theme.colors.bold};
`

export const Bold = styled.b`
  color: ${(props) => props.theme.colors.bold};
`

export const H1 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.thick};
  margin: 0;
`

export const P = styled.p`
  margin: ${(props) => props.theme.spaces[1]};
`
