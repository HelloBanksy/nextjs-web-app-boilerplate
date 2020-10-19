const homepageReducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'SET_HOMEPAGE_DATA_ASYNC':
      return { ...state, data: action.data }
    default:
      return state
  }
}

export default homepageReducer