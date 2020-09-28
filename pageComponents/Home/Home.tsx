import React from 'react'
import { HomepageWrap, Bold, H1, P } from './styles'

export const Home = (): JSX.Element => {
  return (
    <HomepageWrap>
      <H1>Lads?</H1>
      <P>
        This is web app boilerplate, based on: <Bold>NextJS, StyledComponents &amp; TypeScript</Bold> 🚀
      </P>
      <P>Feel free to use it as your basic layer.</P>
    </HomepageWrap>
  )
}
