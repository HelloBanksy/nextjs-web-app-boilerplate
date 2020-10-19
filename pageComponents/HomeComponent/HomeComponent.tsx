import React from 'react'
import { HomepageWrap, Bold, H1, P, DummyDataTrigger } from './styles'

type Props =  {
  onHomepageDataLoad: () => void
  dummyHomepageData: object
}

export const HomeComponent = ({ onHomepageDataLoad, dummyHomepageData }: Props): JSX.Element => {
  return (
    <HomepageWrap>
      <H1>Lads?</H1>
      <P>
        This is web app boilerplate, based on: <Bold>NextJS, StyledComponents &amp; TypeScript</Bold> 🚀
      </P>
      <P>Feel free to use it as your basic layer.</P>
      <DummyDataTrigger onClick={onHomepageDataLoad}>set dummy data to Redux store!</DummyDataTrigger>
      {dummyHomepageData && <P>Check out your Redux store in console :)</P>}
    </HomepageWrap>
  )
}
