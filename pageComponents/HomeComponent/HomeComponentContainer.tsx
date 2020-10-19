import React from 'react'
import { HomeComponent } from './HomeComponent'
import { connect } from 'react-redux'

// Mapping redux state
const mapStateToProps = (state: any) => {
  return {
    dummyHomepageData: state.homepageReducer?.data || null,
  }
}

// Mapping functions dispatches
const mapDispachToProps = (dispatch: any) => {
  return {
    onHomepageDataLoad: () => dispatch({ type: 'SET_HOMEPAGE_DATA' }),
  }
}

const HomeComponentContainer = (props: any): JSX.Element => {
  return <HomeComponent {...props} />
}

export default connect(mapStateToProps, mapDispachToProps)(HomeComponentContainer)
